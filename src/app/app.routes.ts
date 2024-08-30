import { Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from './home/home.component';
import { DiaryPageComponent } from './diary-page/diary-page.component';

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
