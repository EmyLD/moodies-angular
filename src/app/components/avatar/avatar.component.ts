import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  template: `
    <div>
      <img
        src="{{ url() }}"
        class="size-20 inline-block lg:size-40 rounded-full shadow-gold/30 shadow-md"
      />
    </div>
  `,
})
export class AvatarComponent {
  url = input<string>('');
}
