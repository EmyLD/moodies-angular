import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { redirectIfAuthenticatedGuard } from '../infra/guard/redirect-if-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canMatch: [redirectIfAuthenticatedGuard],
  },
  {
    path: 'profil',
    loadComponent: () => import('./profil/profil.component'),
  },
  {
    path: 'profil/:title',
    loadComponent: () => import('./diary-page/diary-page.component'),
  },
];
