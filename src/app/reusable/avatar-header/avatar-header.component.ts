import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { H2TitleComponent } from '../h2-title/h2-title.component';
import { SubcaptionComponent } from '../subcaption/subcaption.component';

@Component({
  selector: 'app-avatar-header',
  standalone: true,
  imports: [CommonModule, H2TitleComponent, SubcaptionComponent],
  templateUrl: './avatar-header.component.html',
  styleUrl: './avatar-header.component.scss',
})
export class AvatarHeaderComponent {
  @Input() name: string = '';
  @Input() url: string = '';
  @Input() text: string = '';
}
