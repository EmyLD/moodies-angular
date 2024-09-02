import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <img
        src="{{ url }}"
        class="size-20 inline-block lg:size-40 rounded-full shadow-gold/30 shadow-md"
      />
    </div>
  `,
})
export class AvatarComponent {
  @Input() url = '';
}
