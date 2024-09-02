import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OutputEmitterRef,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <button
      class="rounded-md border py-2 px-4 border-dark-green text-dark-green hover:bg-light-green hover:border-soft-green hover:text-soft-green transition-colors duration-300"
    >
      @if (icon != undefined) {
      <fa-icon [icon]="icon"></fa-icon>
      } @else if (label != '') {
      <span>
        {{ label }}
      </span>
      }
    </button>
  `,
})
export class ButtonComponent {
  @Input() icon: IconDefinition | undefined = undefined;

  @Input() label: string = '';

  @Output() click = new EventEmitter<void>();

  handleClick() {
    this.click.emit(); // Émettre l'événement lors du clic
  }
}
