import { Component } from '@angular/core';
import { H1TitleComponent } from '../reusable/h1-title/h1-title.component';
import { ButtonComponent } from '../reusable/radialButton/radialButton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, H1TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `10s`,
    animationDelay: `${Math.random() * 5}s`, // délais pour que les particules ne se déplacent pas toutes en même temps
    transformOrigin: `${Math.random() * 100}% ${Math.random() * 100}%`,
  }));

  navigate = () => {};
}
