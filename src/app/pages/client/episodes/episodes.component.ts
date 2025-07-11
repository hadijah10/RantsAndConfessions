import { Component } from '@angular/core';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { EpisodesService } from '../../../services/api-consumer/episodes/episodes.service';
import { PodcastEpisode } from '../../../model/episodedata.interface';

@Component({
  selector: 'app-episodes',
  imports: [MatPaginatorModule],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent {

   allEpisodes: PodcastEpisode[] = [];
  paginatedEpisodes: PodcastEpisode[] = [];

   totalItems = 0;
  pageSize = 5;
  currentPage = 0;
  constructor (private episodeservice: EpisodesService){
    this.fetchEpisodes();
  }

  fetchEpisodes(){
    this.episodeservice.getEpisodes().subscribe(data => {
      this.allEpisodes = data.data;
      this.totalItems = data.data.length;
      this.updatePaginatedEpisodes();
    });
  }

  updatePaginatedEpisodes(){
      const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedEpisodes = this.allEpisodes.slice(start, end);
  }

    onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedEpisodes();
  }

}
