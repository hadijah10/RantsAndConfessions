import { Component, signal } from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { EpisodesService } from '../../../services/api-consumer/episodes/episodes.service';
import { PodcastEpisode } from '../../../model/episodedata.interface';
import { PaginatorIntlService } from '../../../services/paginatorIntl/paginator-intl.service';
import { RouterLink } from '@angular/router';
import { EpisodecardComponent } from '../../../components/episodecard/episodecard.component';

@Component({
  selector: 'app-episodes',
  imports: [MatPaginatorModule,RouterLink,EpisodecardComponent],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
  providers: [{provide: MatPaginatorIntl,useClass:PaginatorIntlService}]
})
export class EpisodesComponent {

   allEpisodes: PodcastEpisode[] = [];
  paginatedEpisodes: PodcastEpisode[] = [];
  error = signal<string |null>(null)
  isLoading=true

   totalItems = 0;
  pageSize = 5;
  currentPage = 0;
  constructor (private episodeservice: EpisodesService){
    this.fetchEpisodes();
  }

  fetchEpisodes(){
    this.episodeservice.getEpisodes(1).subscribe({
      next:(data) => {
        this.isLoading = false
        this.error.set(null)
        this.allEpisodes = data.data;
        this.totalItems = data.data.length;
        this.updatePaginatedEpisodes();
      },
      error:(error) => {
        this.isLoading = false
        this.error.set('An error ocurred')
      }
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
