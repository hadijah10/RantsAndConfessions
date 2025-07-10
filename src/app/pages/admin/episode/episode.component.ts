import { Component } from '@angular/core';
import { IAddEpisodeToPlaylistApiResponse, IEpisode } from '../../../model/playlistdata.interface';

@Component({
  selector: 'app-episode',
  imports: [],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent {
  episodes: IEpisode[] = []

  constructor() { }

  toggleCreate() {

  }

}
