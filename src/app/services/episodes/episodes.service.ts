import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private url=`https://api.rantsnconfess.com/v1/episodes`
  constructor() { }


}
