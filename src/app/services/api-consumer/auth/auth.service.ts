import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginInterface, ILoginSuccess, ISignUpInterface, ISignUpSuccess, LogOutInterface } from '../../../model/authdata.interface';
import { catchError, Observable, of, retry } from 'rxjs';
import { ErrorService } from '../../error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = `https://api.rantsnconfess.com/v1/`

  constructor(private http: HttpClient, private errorService: ErrorService) { }


  signup(data: ISignUpInterface) {
    this.http.post<ISignUpSuccess>(`${this.url}register`, data).pipe(
      retry(2),
      catchError(error => {
        this.errorService.handleError(error);
        return of(error);
      })
    )
  }

  login(data: ILoginInterface):Observable<ILoginSuccess> {
    return this.http.post<ILoginSuccess>(`${this.url}login`, data).pipe(
      retry(2),
      catchError(error => {
        this.errorService.handleError(error);
        return of(error);
      })
    )
  }

  logOut() {
    this.http.get<LogOutInterface>(`${this.url}logout`).pipe(
       catchError(error=>{
        this.errorService.handleError(error);
        return of(error);
      })
    )
  }
}
