import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { H2TitleComponent } from '../h2-title/h2-title.component';
import { SubcaptionComponent } from '../subcaption/subcaption.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ButtonComponent } from '../button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPenToSquare,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import { onClickModifyUsername } from '../../lib/utils/modifyEntry';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avatar-header',
  standalone: true,
  imports: [
    CommonModule,
    H2TitleComponent,
    SubcaptionComponent,
    AvatarComponent,
    FontAwesomeModule,
    ButtonComponent,
    FormsModule,
  ],
  templateUrl: './avatar-header.component.html',
  styleUrl: './avatar-header.component.scss',
})
export class AvatarHeaderComponent {
  hasClickedModifyBtn: boolean = false;
  iconPen = faPenToSquare;
  iconOk = faSquareCheck;
  username: string = 'Initial Name';
  @Input() name: string = '';
  @Input() url: string = '';
  @Input() text: string = '';
  onClickModify(value: string) {
    this.hasClickedModifyBtn = true;
    onClickModifyUsername('username', 'value');
  }
}
