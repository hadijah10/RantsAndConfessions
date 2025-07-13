import { Component } from '@angular/core';
import { PlaylistService } from '../../../services/api-consumer/playlist/playlist.service';
import { IPlaylistListApiResponse } from '../../../model/playlistdata.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { EpisodesService } from '../../../services/api-consumer/episodes/episodes.service';
import { IPodcastApiResponse } from '../../../model/episodedata.interface';
import { EpisodecardComponent } from '../../../components/episodecard/episodecard.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-homepage',
  imports: [AsyncPipe,EpisodecardComponent,RouterLink,ButtonComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  featplaylist$!:Observable<IPlaylistListApiResponse>
  episodesdata$!:Observable<IPodcastApiResponse>
  // teamMembers$!:

  constructor(private playlist:PlaylistService,private episodes:EpisodesService){
    this.featplaylist$ = this.playlist.getPlaylist()
    this.episodesdata$ =  this.episodes.getEpisodes(1)
  }



}
