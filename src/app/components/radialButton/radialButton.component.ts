import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radialButton',
  standalone: true,
  template: `<button
    class="bg-[#FADADD] hover:bg-darker-pink text-gray hover:text-white transition-all duration-500 p-5 rounded-lg hover:shadow-[0_0_150px_75px_rgba(255,223,186,0.8)]"
    (click)="(click)"
    [type]="type"
  >
    {{ label }}
  </button> `,
})
export class RadialButtonComponent {
  @Input() label: string = '';
  @Input() route: string = '';
  @Input() type: string = '';
  @Output() click = new EventEmitter<void>();
}
