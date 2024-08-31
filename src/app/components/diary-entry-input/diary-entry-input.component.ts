import { Component, Input } from '@angular/core';
import { SubcaptionComponent } from '../subcaption/subcaption.component';
import { diaryEntriesHistory } from '../../lib/datas/diaryEntriesHistory';
import { CommonModule } from '@angular/common';
import { Entries } from '../../lib/utils/definition';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-diary-entry-input',
  standalone: true,
  imports: [SubcaptionComponent, CommonModule, ButtonComponent],
  templateUrl: './diary-entry-input.component.html',
  styleUrl: './diary-entry-input.component.scss',
})
export class DiaryEntryInputComponent {
  @Input() diaryEntry: Array<Entries> = diaryEntriesHistory;
  constructor(private router: Router) {}

  navigate(value: string) {
    this.router.navigate(['/profil/' + value]);
  }
}
