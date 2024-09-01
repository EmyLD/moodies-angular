import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radialButton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radialButton.component.html',
  styleUrl: './radialButton.component.scss',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() route: string = '';
  @Input() type: string = '';
  @Output() click = new EventEmitter<void>();

  constructor(private router: Router) {}

  // navigate() {
  //   if (this.route) {
  //     this.router.navigate([this.route]);
  //   }
  // }
}
