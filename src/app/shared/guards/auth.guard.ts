import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService = inject(AuthService);
  let isLogged = authService.isLoggedIn$.value;
  
  if (isLogged) {
    return true;
  }

  router.navigate(['login']);
  return false;
};
