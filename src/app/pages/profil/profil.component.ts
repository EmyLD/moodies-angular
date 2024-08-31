import { Component } from '@angular/core';
import { AvatarHeaderComponent } from '../../components/avatar-header/avatar-header.component';
import { EmotionalChartComponent } from '../../components/emotional-chart/emotional-chart.component';
import { DiaryEntryInputComponent } from '../../components/diary-entry-input/diary-entry-input.component';
import { H2TitleComponent } from '../../components/h2-title/h2-title.component';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    AvatarHeaderComponent,
    EmotionalChartComponent,
    EmotionalChartComponent,
    DiaryEntryInputComponent,
    H2TitleComponent,
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export class ProfilComponent {}
