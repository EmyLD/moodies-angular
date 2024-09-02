import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<li class="text-dark-green">
    <a [routerLink]="link">{{ linkLabel }}</a>
  </li> `,
})
export class NavLinkComponent {
  @Input() link: string = '';
  @Input() linkLabel: string = '';
}
