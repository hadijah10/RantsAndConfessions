import { Injectable } from '@angular/core';
import { IEpisodeResponse } from '../../model/playlistdata.interface';
import { EpisodesService } from '../api-consumer/episodes/episodes.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeStateService {

  private episodeStateSubject = new BehaviorSubject<IEpisodeResponse | null>(null);
  episodeState$ = this.episodeStateSubject.asObservable();
  currentPage: number = 1;
  totalPage: number = 1;

  constructor(private episodeService: EpisodesService) { }


  getEpisodes() {
    const subscription = this.episodeService.getEpisodes(this.currentPage).subscribe(value => {
      this.episodeStateSubject.next(value)
      this.currentPage = value.meta.page;
      const perPage = 15;
      this.totalPage = Math.ceil(value.meta.total / perPage);
      subscription.unsubscribe()
    })
  }

 next(): void {
    if (this.currentPage < this.totalPage) {
      this.currentPage++;
      this.getEpisodes();
    }
  }

  prev(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getEpisodes();
    }
  }

}
