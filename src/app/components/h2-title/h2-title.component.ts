import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h2-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './h2-title.component.html',
  styleUrl: './h2-title.component.scss',
})
export class H2TitleComponent {
  @Input() titleLabel: string = '';
}
