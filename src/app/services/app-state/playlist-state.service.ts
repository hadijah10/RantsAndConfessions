import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, catchError, of, map } from 'rxjs';
import { PlaylistService } from '../api-consumer/playlist/playlist.service';
import { IPlaylist, IPlaylistResponseData } from '../../model/playlistdata.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaylistStateService {

  private playlistSubject = new BehaviorSubject<IPlaylistResponseData | null>(null);
  public playlist$ = this.playlistSubject.asObservable();

  private page = 1;
  totalPlaylists = 15;
  lastPage = 15;

  constructor(private playlistClient: PlaylistService) { }

  getPlaylist(): void {
    const subscription = this.playlistClient.getPlaylist(this.page).subscribe(value => {
      this.playlistSubject.next(value.data)
      this.lastPage = value.data.last_page
      this.totalPlaylists = value.data.total

      subscription.unsubscribe()
    })
  }

  deletePlaylist(id: number): void {
    this.playlistClient.deletePlaylist(id).subscribe({
      next: (value) => {
        if (!value || value.status === 'success') {

          let currentValue = this.playlistSubject.value;
          let updatedList = currentValue?.data.filter(v => v.id !== id) || [];

          if (currentValue) {
            this.playlistSubject.next({
              ...currentValue,
              data: updatedList,
              current_page: currentValue.current_page ?? 1,
              first_page_url: currentValue.first_page_url ?? '',
              from: currentValue.from ?? 0,
              last_page: currentValue.last_page ?? 1,
              last_page_url: currentValue.last_page_url ?? '',
              next_page_url: currentValue.next_page_url ?? null,
              path: currentValue.path ?? '',
              per_page: currentValue.per_page ?? 0,
              prev_page_url: currentValue.prev_page_url ?? null,
              to: currentValue.to ?? 0,
              total: currentValue.total ?? 0
            });
          }
        } else {
          // Show user feedback for error
          console.error('Failed to delete playlist');
        }
      },
      error: (err) => {
        console.error('Delete request failed:', err);
      }
    });
  }

createPlaylist(name: string, description: string): Observable<boolean> {
  return this.playlistClient.createPlaylist({ name, description }).pipe(
    map(value => {
      if (value.status === 'success') {
        const currentValue = this.playlistSubject.value;

        this.playlistSubject.next({
          ...currentValue,
          data: [value.data, ...(currentValue?.data || [])],
          current_page: currentValue?.current_page ?? 1,
          first_page_url: currentValue?.first_page_url ?? '',
          from: currentValue?.from ?? 0,
          last_page: currentValue?.last_page ?? 1,
          last_page_url: currentValue?.last_page_url ?? '',
          next_page_url: currentValue?.next_page_url ?? null,
          path: currentValue?.path ?? '',
          per_page: currentValue?.per_page ?? 0,
          prev_page_url: currentValue?.prev_page_url ?? null,
          to: currentValue?.to ?? 0,
          total: currentValue?.total ?? 0,
          links: currentValue?.links ?? []
        });

        return true;
      } else {
        return false;
      }
    }),
    catchError(error => {
      console.error('Create playlist failed:', error);
      return of(false);
    })
  );
}


  search(query: string) {
    // this.playlistClient.
  }


  nextPage(): void {
    this.page++;
    this.getPlaylist();
  }

}
