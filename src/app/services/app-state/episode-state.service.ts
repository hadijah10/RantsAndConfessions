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
  currentPage = 1;

  constructor(private episodeService: EpisodesService) { }


  getEpisodes() {
    const subscription = this.episodeService.getEpisodes(this.currentPage).subscribe(value => {
      this.episodeStateSubject.next(value)
      this.currentPage = value.meta.page;
      subscription.unsubscribe()
    })
  }

}
