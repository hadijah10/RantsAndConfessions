import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPodcastApiResponse } from '../../model/episodedata.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private url=`https://api.rantsnconfess.com/v1/episodes`

  constructor(private http: HttpClient) { }

  getEpisodes(){
    return this.http.get<IPodcastApiResponse>(this.url)
  }

  getSingleEpisode(){
    //to be done.
    // return this.http.get<>()
  }

}
