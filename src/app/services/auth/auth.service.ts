import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginInterface, ILoginSuccess, ISignUpInterface, ISignUpSuccess, LogOutInterface } from '../../model/authdata.interface';
import { catchError,retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = `https://api.rantsnconfess.com/v1/`

  constructor(private http: HttpClient) { }


  signup(data: ISignUpInterface){
    this.http.post<ISignUpSuccess>(`${this.url}register`,data).pipe(
      retry(2)
    
    )
  }

  login(data:ILoginInterface){
    this.http.post<ILoginSuccess>(`${this.url}login`,data).pipe(
      retry(2)
    )
  }

  logOut(data:ILoginInterface){
    this.http.get<LogOutInterface>(`${this.url}logout`).pipe(
      //remove user token if successfull.
    )
  }
}
