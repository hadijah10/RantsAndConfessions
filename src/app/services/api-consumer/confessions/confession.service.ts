import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConfessionResponse, Ifilter, IGetConfessionData, IPostConfessionData, IPostConfessionDataResponse } from '../../../model/confessiondata.interface';
import { catchError, Observable, of } from 'rxjs';
import { ErrorService } from '../../error.service';

@Injectable({
  providedIn: 'root'
})
export class ConfessionService {
  private url = `https://api.rantsnconfess.com/v1/confessions`

  constructor(private http: HttpClient, private errorService: ErrorService) { }
  
  getConfessions(status: Ifilter = ""):Observable<IConfessionResponse> {
    return this.http.get<IConfessionResponse>(status? `${this.url}?status=${status}`: this.url).pipe(
      catchError(error => {
        this.errorService.handleError(error)
        return of(error)
      })
    )
  }

  postConfessions(data: IPostConfessionData) {
    return this.http.post<IPostConfessionDataResponse>(this.url, data).pipe()
  }


}
