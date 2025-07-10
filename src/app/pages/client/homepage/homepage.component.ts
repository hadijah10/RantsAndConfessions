import { Component } from '@angular/core';
import { PlaylistService } from '../../../services/api-consumer/playlist/playlist.service';
import { IPlaylistListApiResponse } from '../../../model/playlistdata.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [AsyncPipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  featplaylist$!:Observable<IPlaylistListApiResponse>
  constructor(private playlist:PlaylistService){
    this.featplaylist$ = this.playlist.getPlaylist()
  }



}
