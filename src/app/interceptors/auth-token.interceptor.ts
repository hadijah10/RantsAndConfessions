import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStateService } from '../services/app-state/auth-state.service';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authState = inject(AuthStateService);
  const token = authState.authState?.token;

  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedReq);
  }

  return next(req);
};
