import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subcaption',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subcaption.component.html',
  styleUrl: './subcaption.component.scss',
})
export class SubcaptionComponent {
  @Input() text: string = ''; // Input property to receive text
}
