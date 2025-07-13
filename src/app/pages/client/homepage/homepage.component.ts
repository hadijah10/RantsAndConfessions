import { Component, OnInit, signal } from '@angular/core';
import { PlaylistService } from '../../../services/api-consumer/playlist/playlist.service';
import { IPlaylistListApiResponse } from '../../../model/playlistdata.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { EpisodesService } from '../../../services/api-consumer/episodes/episodes.service';
import { IPodcastApiResponse } from '../../../model/episodedata.interface';
import { EpisodecardComponent } from '../../../components/episodecard/episodecard.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';
import { TeamMembersService } from '../../../services/api-consumer/team-members/team-members.service';
import { ITeamMember, ITeamMembersApiResponse } from '../../../model/teammembersdata.interface';

@Component({
  selector: 'app-homepage',
  imports: [AsyncPipe,EpisodecardComponent,RouterLink,ButtonComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  featplaylist$!:Observable<IPlaylistListApiResponse>
  episodesdata$!:Observable<IPodcastApiResponse>
  teamMembers!:ITeamMember[]
  isLoading= true
  isError = signal<string | null>(null)

  constructor(private playlist:PlaylistService,private episodes:EpisodesService,private teammembersService: TeamMembersService){
    this.featplaylist$ = this.playlist.getPlaylist()
    this.episodesdata$ =  this.episodes.getEpisodes(1)
    
  }

  ngOnInit(){
    this.teammembersService.getTeamMembers().subscribe({
      next:(members) => {
        this.isLoading = false
        if(members){
          this.teamMembers = members.data
        }
        },
      error:(error) => {
        this.isLoading = false
        this.isError.set('An error occurred')
      }
    })
  }

}
