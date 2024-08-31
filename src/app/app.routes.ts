import { Routes } from '@angular/router';
import { ProfilComponent } from './pages/profil/profil.component';
import { HomeComponent } from './pages/home/home.component';
import { DiaryPageComponent } from './pages/diary-page/diary-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
