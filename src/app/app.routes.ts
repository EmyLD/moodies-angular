import { Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from './home/home.component';
import { DiaryPageComponent } from './diary-page/diary-page.component';
import { redirectIfAuthenticatedGuard } from '../infra/guard/redirect-if-authenticated.guard';

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
