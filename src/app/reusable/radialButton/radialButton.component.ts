import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radialButton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radialButton.component.html',
  styleUrl: './radialButton.component.scss',
})
export class ButtonComponent {
  @Input() label: string = '';
}
