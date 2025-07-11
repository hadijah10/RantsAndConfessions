import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from '../../../../services/api-consumer/episodes/episodes.service';
import { PodcastEpisode } from '../../../../model/episodedata.interface';

@Component({
  selector: 'app-episodedetails',
  imports: [],
  templateUrl: './episodedetails.component.html',
  styleUrl: './episodedetails.component.scss'
})
export class EpisodedetailsComponent {

  activeroute = inject(ActivatedRoute)
  id:string=''
  isLoading=true
  error =signal<string | null>(null)
  episodedata!:PodcastEpisode

  constructor(private episodeService:EpisodesService){
    this.id = this.activeroute.snapshot.params['id']
    this.episodeService.getEpisodes().subscribe({
      next:(data) => {
        this.episodedata = data.data.find(episode => episode.id == parseInt(this.id))!
      },
      error:(error) => {}
    })
  }
}
