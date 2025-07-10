import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlaylistStateService } from '../../../services/app-state/playlist-state.service';
import { IPlaylist } from '../../../model/playlistdata.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist',
  imports: [],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent implements OnInit, OnDestroy {
  protected playlist: IPlaylist[] = [];
  subscription:Subscription = new Subscription()
  constructor(private playlistState:PlaylistStateService){
    this.subscription = this.playlistState.playlist$.subscribe({
        next: (value)=> {
            this.playlist = value
        },
      })
  }

  ngOnInit(): void {
      this.playlistState.getPlaylist()
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

}
