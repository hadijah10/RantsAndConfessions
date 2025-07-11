import { Component,Input } from '@angular/core';
import { PodcastEpisode } from '../../model/episodedata.interface';

@Component({
  selector: 'app-episodecard',
  imports: [],
  templateUrl: './episodecard.component.html',
  styleUrl: './episodecard.component.scss'
})
export class EpisodecardComponent {
  @Input() epidata!:PodcastEpisode

}
