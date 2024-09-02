import { CanActivateFn } from '@angular/router';

export const redirectIfAuthenticatedGuard: CanActivateFn = () => {
  const username = window.localStorage.getItem('username');
  if (username) {
    console.log(username);

    return false;
  }
  return true;
};
