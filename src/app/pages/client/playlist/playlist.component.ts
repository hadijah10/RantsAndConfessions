import { Component,signal } from '@angular/core';
import { PlaylistService } from '../../../services/api-consumer/playlist/playlist.service';
import { IPlaylistResponseData } from '../../../model/playlistdata.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-playlist',
  imports: [RouterLink],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent {
  isLoading:boolean = true
  error = signal<string | null>(null)
  playlistdata!: IPlaylistResponseData

  constructor(private playlistService: PlaylistService){
    this.playlistService.getPlaylist().subscribe({
      next: (data) => { 
        this.isLoading = false
        this.playlistdata = data.data
      },
      error: (data) => {
       this.error.set('error occured')
      }
    })
  }

}
