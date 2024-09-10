import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const redirectIfAuthenticatedGuard: CanMatchFn = () => {
  const router = inject(Router);
  const username = window.localStorage.getItem('username');
  if (username) {
    return router.createUrlTree(['/profil']);
  }
  return true;
};
