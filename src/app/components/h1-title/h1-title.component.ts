import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h1-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './h1-title.component.html',
  styleUrl: './h1-title.component.scss',
})
export class H1TitleComponent {
  @Input() titleLabel: string = '';
}
