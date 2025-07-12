import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStateService } from '../services/app-state/auth-state.service';

export const PublicOnlyAuthGuard: CanActivateFn = (route, state) => {
  const auth_state = inject(AuthStateService)
  const router = inject(Router)

  const isAuthenticated = auth_state.authState?.user;
  
  if(isAuthenticated){
    router.navigate(["/admin"])
    return false;
  }
   return true;
};
