import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subcaption',
  standalone: true,
  imports: [CommonModule],
  template: ` <p class="subcaption">
    {{ text }}
  </p>`,
})
export class SubcaptionComponent {
  @Input() text: string = '';
}
