import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetConfessionData, IPostConfessionData, IPostConfessionDataResponse } from '../../model/confessiondata.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfessionService {
  private url = `https://api.rantsnconfess.com/v1/confessions`

  constructor(private http: HttpClient) { }
  getConfessions(){
    //only possible with authentication
   return this.http.get<IGetConfessionData[]>(this.url).pipe()
  }

  postConfessions(data: IPostConfessionData){
    return this.http.post<IPostConfessionDataResponse>(this.url,data).pipe()
  }


}
