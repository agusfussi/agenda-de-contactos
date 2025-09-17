import { inject } from '@angular/core';
import { CanActivateFn, Router, RedirectCommand } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const onlyPublicUserGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)

  if(auth.token){
    const loginPath = router.parseUrl("/contact-pages");
      return new RedirectCommand(loginPath, {
        skipLocationChange: true,
      });
  }
  return true;
};
