import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetConfessionData, IPostConfessionData, IPostConfessionDataResponse } from '../../../model/confessiondata.interface';
import { catchError, retry,of } from 'rxjs';
import { ErrorService } from '../../error.service';

@Injectable({
  providedIn: 'root'
})
export class ConfessionService {
  private url = `https://api.rantsnconfess.com/v1/confessions`

  constructor(private http: HttpClient,private errorservice:ErrorService) { }
  getConfessions(){
    //only possible with authentication
   return this.http.get<IGetConfessionData[]>(this.url).pipe(
    retry(2),
    catchError(error =>{
       this.errorservice.handleError(error)
      return of(error);
    }
   ))
  }

  postConfessions(data: IPostConfessionData){
    return this.http.post<IPostConfessionDataResponse>(this.url,data).pipe(
      retry(2),
    catchError(error =>{
       this.errorservice.handleError(error)
      return of(error);
    }
    ))
  }


}
