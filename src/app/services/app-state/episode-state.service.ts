import { Injectable } from '@angular/core';
import { IEpisodeResponse } from '../../model/playlistdata.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeStateService {
  episodeState :IEpisodeResponse|null = null
  constructor() { }
  
}
