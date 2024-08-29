import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticulesComponent } from './particules/particules.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParticulesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
}
