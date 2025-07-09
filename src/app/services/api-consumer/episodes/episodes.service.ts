import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPodcastApiResponse,IPodcastEpisodesSearchApiResponse } from '../../../model/episodedata.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private url=`https://api.rantsnconfess.com/v1/episodes`

  constructor(private http: HttpClient) { }

  getEpisodes(){
    return this.http.get<IPodcastApiResponse>(this.url).pipe()
  }

  getSingleEpisode(){
    //to be done.
    // return this.http.get<>()
  }

  searchEpisodes(searchTerm: string){
    return this.http.get<IPodcastEpisodesSearchApiResponse>(`${this.url}/search?search=${searchTerm}`).pipe()
  }

}
