import { Injectable } from '@angular/core';
import { AuthService } from '../api-consumer/auth/auth.service';
import { IAuthState } from '../../model/authdata.interface';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  authState: IAuthState | null = null;

  constructor(private authConsumer: AuthService) {
    this.checkLocalStorage()
  }

  login(email: string, password: string): Observable<boolean> {
    return this.authConsumer.login({ email, password }).pipe(
      tap(value => {
        this.authState = value.data;
        this.persitAuthLocal(value.data);
      }),
      map(() => true),
      catchError(() => of(false))
    );
  }

  // storeToken(token: string) {
  //   sessionStorage.setItem('auth-token', token)
  // }


  persitAuthLocal(value: IAuthState) {
    localStorage.setItem(`auth`, JSON.stringify(value))
  }

  checkLocalStorage() {
    const authString = localStorage.getItem(`auth`)
    if (!authString) return;
    this.authState = JSON.parse(authString)
  }

  logout(): Observable<boolean> {
    return this.authConsumer.logOut().pipe(
      tap(resp => {
        if (resp.message) {
          this.authState = null;
          localStorage.clear();
        } else {
          throw new Error('Logout failed:Token is missing or invalid');
        }
      }),
      map(() => true),
      catchError(() => of(false))
    );
  }

}
