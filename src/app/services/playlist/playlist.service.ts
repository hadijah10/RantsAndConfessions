import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private url = `https://api.rantsnconfess.com/v1/playlists`
  constructor() { }
  getPlaylist(private http: HttpClient){
    return this.http.get(this.url)
  }
}
