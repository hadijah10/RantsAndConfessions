import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEpisodeIdsPayload, IPlaylistDeleteResponse, IPlaylistEditData, IPlaylistListApiResponse, IPostPlaylistApiResponse, IPostPlaylistData, IAddEpisodeToPlaylistApiResponse } from '../../../model/playlistdata.interface';
import { catchError, Observable, of } from 'rxjs';
import { ErrorService } from '../../error.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private url = `https://api.rantsnconfess.com/v1/playlists`
  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getPlaylist(page: number): Observable<IPlaylistListApiResponse> {
    return this.http.get<IPlaylistListApiResponse>(`${this.url}?page=${page}`).pipe(
      catchError(error => {
        this.errorService.handleError(error);
        return of(error)
      })
    )
  }

  createPlaylist(data: IPostPlaylistData): Observable<IPostPlaylistApiResponse> {
    return this.http.post<IPostPlaylistApiResponse>(this.url, data).pipe(
      catchError(error => {
        this.errorService.handleError(error);
        return of(error)
      })
    )
  }

  editPlaylist(id: number, data: IPlaylistEditData) {
    return this.http.put<IPostPlaylistApiResponse>(`${this.url}/${id}`, data).pipe()
  }

  deletePlaylist(id: number) {
    return this.http.delete<IPlaylistDeleteResponse>(`${this.url}/${id}`).pipe()
  }

  addEpisodesToPlaylist(id: number, data: IEpisodeIdsPayload) {
    //function clears out existing episodes in playlist
    return this.http.post<IAddEpisodeToPlaylistApiResponse>(`${this.url}/${id}/episodes`, data)
  }
}

