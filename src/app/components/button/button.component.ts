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
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() icon: IconDefinition | undefined = undefined;

  @Input() label: string = '';

  @Output() click = new EventEmitter<void>();

  handleClick() {
    this.click.emit(); // Émettre l'événement lors du clic
  }
}
