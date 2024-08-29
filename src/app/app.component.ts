import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './reusable/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
  particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${10 + Math.random() * 20}s`, // Variation plus grande pour durée
    animationDelay: `${Math.random() * 5}s`,
    transformOrigin: `${Math.random() * 100}% ${Math.random() * 100}%`,
  }));
  label: string = 'Commencez à écrire';
}
