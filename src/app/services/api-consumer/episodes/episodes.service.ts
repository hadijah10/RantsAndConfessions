import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPodcastApiResponse,IPodcastEpisodesSearchApiResponse } from '../../../model/episodedata.interface';
import { catchError, Observable, of } from 'rxjs';
import { ErrorService } from '../../error.service';
import { IEpisodeResponse } from '../../../model/playlistdata.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private url=`https://api.rantsnconfess.com/v1/episodes`

  constructor(private http: HttpClient,private errorService:ErrorService) { }

  getEpisodes(page:number):Observable<IEpisodeResponse>{
    return this.http.get<IEpisodeResponse>(`${this.url}?page=${page}`).pipe(
      catchError(error=> {
        this.errorService.handleError(error);
        return of(error);
      })
    )
  }

  getSingleEpisode(){
    //to be done.
    // return this.http.get<>()
  }

  searchEpisodes(searchTerm: string){
    return this.http.get<IPodcastEpisodesSearchApiResponse>(`${this.url}/search?search=${searchTerm}`).pipe()
  }

}
