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
import { modifyLocalStorageValue } from '../../../utils/modifyEntry';
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
  template: `
    <article class="flex gap-x-6 w-full borderProfilContainer">
      <app-avatar url="{{ url }}" />
      <article class="flex flex-col justify-evenly">
        <section>
          @if(hasClickedModifyBtn) {
          <app-h2-title [titleLabel]="username" />
          <article class="flex">
            <input
              [(ngModel)]="username"
              placeholder="newname"
              class="py-2"
              name="username"
            />
            <app-button [icon]="iconOk" />
          </article>
          } @else {
          <app-h2-title titleLabel="{{ name }}" />
          <app-button [icon]="iconPen" (click)="onClickModify(name)" />
          }
        </section>

        <app-subcaption text="{{ text }}" />
      </article>
    </article>
  `,
})
export class AvatarHeaderComponent {
  hasClickedModifyBtn: boolean = false;
  iconPen = faPenToSquare;
  iconOk = faSquareCheck;
  username: string = '';
  @Input() name: string = '';
  @Input() url: string = '';
  @Input() text: string = '';
  onClickModify(value: string) {
    this.hasClickedModifyBtn = true;
    modifyLocalStorageValue('username', value);
  }
}
