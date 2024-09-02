import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h1-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-5xl mb-4 text-light-pink">{{ titleLabel }}</h1> `,
})
export class H1TitleComponent {
  @Input() titleLabel: string = '';
}
