import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, catchError, of } from 'rxjs';
import { PlaylistService } from '../api-consumer/playlist/playlist.service';
import { IPlaylist } from '../../model/playlistdata.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaylistStateService {

  private playlistSubject = new BehaviorSubject<IPlaylist[]>([]);
  public playlist$ = this.playlistSubject.asObservable();

  private page = 1;
  totalPlaylists = 15;
  lastPage = 15;

  constructor(private playlistClient: PlaylistService) {}

  getPlaylist(): void {
    this.playlistClient.getPlaylist(this.page).subscribe(value=>{
        this.playlistSubject.next(value.data)
        this.lastPage = value.meta.last_page
        this.totalPlaylists = value.meta.total
    })
  }


  nextPage(): void {
    this.page++;
    this.getPlaylist();
  }

}
