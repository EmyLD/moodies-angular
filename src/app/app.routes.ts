import { Routes } from '@angular/router';
import { ProfilComponent } from './pages/profil/profil.component';
import { HomeComponent } from './pages/home/home.component';
import { DiaryPageComponent } from './pages/diary-page/diary-page.component';
import { redirectIfAuthenticatedGuard } from '../infra/auth/redirect-if-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [redirectIfAuthenticatedGuard],
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
  {
    path: 'profil/:title',
    component: DiaryPageComponent,
  },
];
