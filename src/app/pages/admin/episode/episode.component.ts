import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAddEpisodeToPlaylistApiResponse, IEpisode } from '../../../model/playlistdata.interface';
import { EpisodeStateService } from '../../../services/app-state/episode-state.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-episode',
  imports: [CommonModule],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent implements OnInit, OnDestroy {

  episodes: IEpisode[] = []
  subscription: Subscription = new Subscription()

  constructor(private episodeState: EpisodeStateService) {
    this.episodeState.getEpisodes();
  }

  ngOnInit(): void {
    this.subscription = this.episodeState.episodeState$.subscribe(value => {
      this.episodes = value?.data || []
    })
  }

  toggleCreate() {

  }

  onDelete(ep: IEpisode) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
