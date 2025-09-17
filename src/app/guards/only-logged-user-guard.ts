import { inject } from '@angular/core';
import { CanActivateChildFn, Router, RedirectCommand } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const onlyLoggedUserGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)

  if (!auth.token) {
    const loginPath = router.parseUrl("/login");
    return new RedirectCommand(loginPath, {
      skipLocationChange: true,
    });
  }
  return true;
};
