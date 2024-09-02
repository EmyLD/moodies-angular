import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h2-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h2 class="text-3xl mb-4 text-darker-pink">{{ titleLabel }}</h2> `,
})
export class H2TitleComponent {
  @Input() titleLabel: string = '';
}
