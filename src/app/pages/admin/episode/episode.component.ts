import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAddEpisodeToPlaylistApiResponse, IEpisode } from '../../../model/playlistdata.interface';
import { EpisodeStateService } from '../../../services/app-state/episode-state.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PaginationComponent } from '../../../components/admin/pagination/pagination.component';

@Component({
  selector: 'app-episode',
  imports: [CommonModule, PaginationComponent],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent implements OnInit, OnDestroy {

  episodes: IEpisode[] = []
  subscription: Subscription = new Subscription()
  page: number = 1;
  totalPage: number = 1;

  constructor(private episodeState: EpisodeStateService) {
    this.episodeState.getEpisodes();
  }

  ngOnInit(): void {
    this.subscription = this.episodeState.episodeState$.subscribe(value => {
      if (!value) return;

      this.episodes = value.data ?? [];
      this.page = value.meta.page;
      const perPage = 15;
      this.totalPage = Math.ceil(value.meta.total / perPage);
    });

  }

  next() {
    this.episodeState.next()
  }

  prev() {
    this.episodeState.prev()
  }

  toggleCreate() {

  }

  onDelete(ep: IEpisode) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
