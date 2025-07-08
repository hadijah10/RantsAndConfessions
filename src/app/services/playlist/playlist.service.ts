import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlaylistDeleteResponse, IPlaylistEditData, IPlaylistListApiResponse, IPostPlaylistApiResponse, IPostPlaylistData } from '../../model/playlistdata.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private url = `https://api.rantsnconfess.com/v1/playlists`
  constructor(private http:HttpClient) { }
  getPlaylist(){
    return this.http.get<IPlaylistListApiResponse>(this.url)
  }

  createPlaylist(data:IPostPlaylistData){
    return this.http.post<IPostPlaylistApiResponse>(this.url,data)
  }

  editPlaylist(id:number,data:IPlaylistEditData){
    return this.http.put<IPostPlaylistApiResponse>(`${this.url}/${id}`,data)
  }

  deletePlaylist(id:number){
    return this.http.delete<IPlaylistDeleteResponse>(`${this.url}/${id}`)
  }

}
