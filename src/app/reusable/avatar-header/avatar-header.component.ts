import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-header.component.html',
  styleUrl: './avatar-header.component.scss',
})
export class AvatarHeaderComponent {
  @Input() name: string = '';
  @Input() url: string = '';
}
