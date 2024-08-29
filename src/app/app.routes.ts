import { Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
];
