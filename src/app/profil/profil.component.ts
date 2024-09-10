import { Component, OnInit } from '@angular/core';
import { AvatarHeaderComponent } from '../components/avatar-header/avatar-header.component';
import { DiaryEntryInputComponent } from '../components/diary-entry-input/diary-entry-input.component';
import { H2TitleComponent } from '../components/h2-title/h2-title.component';
import { Router } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    AvatarHeaderComponent,
    DiaryEntryInputComponent,
    H2TitleComponent,
    ButtonComponent,
  ],
  template: `<app-avatar-header
      name="{{ username }}"
      url="https://avatar.iran.liara.run/public/67"
      text="L'éternel mélancolique 🌙"
    />

    <section class="borderProfilContainer mt-3 lg:mt-10">
      <app-h2-title titleLabel="Historique du Journal" />
      <app-diary-entry-input class="space-y-4" />
    </section>`,
  styleUrl: './profil.component.scss',
})
export default class ProfilComponent implements OnInit {
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
