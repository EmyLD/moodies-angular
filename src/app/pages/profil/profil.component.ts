import { Component } from '@angular/core';
import { AvatarHeaderComponent } from '../../components/avatar-header/avatar-header.component';
import { EmotionalChartComponent } from '../../components/emotional-chart/emotional-chart.component';
import { DiaryEntryInputComponent } from '../../components/diary-entry-input/diary-entry-input.component';
import { H2TitleComponent } from '../../components/h2-title/h2-title.component';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    AvatarHeaderComponent,
    EmotionalChartComponent,
    EmotionalChartComponent,
    DiaryEntryInputComponent,
    H2TitleComponent,
    ButtonComponent,
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export class ProfilComponent {
  username: string = '';
  constructor(private router: Router) {}
  ngOnInit() {
    let hasUsername = window.localStorage.getItem('username');
    this.username = hasUsername ?? this.username;
    if (!hasUsername) {
      this.router.navigate(['/']);
    }
  }

  handleClick() {
    window.localStorage.removeItem('username');
    if (!window.localStorage.getItem('username')) {
      this.router.navigate(['/']);
    }
  }
}
