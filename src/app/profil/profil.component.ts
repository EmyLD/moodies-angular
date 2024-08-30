import { Component } from '@angular/core';
import { AvatarHeaderComponent } from '../reusable/avatar-header/avatar-header.component';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [AvatarHeaderComponent],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export class ProfilComponent {}
