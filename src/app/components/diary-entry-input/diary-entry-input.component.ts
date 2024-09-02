import { Component, Input } from '@angular/core';
import { SubcaptionComponent } from '../subcaption/subcaption.component';
import { diaryEntriesHistory } from '../../../datas/diaryEntriesHistory';
import { CommonModule } from '@angular/common';
import { Entries } from '../../../utils/definition';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-diary-entry-input',
  standalone: true,
  imports: [SubcaptionComponent, CommonModule, ButtonComponent],
  template: `@for (entry of diaryEntry; track entry) {

    <article class="flex gap-x-3 justify-between items-center">
      <app-subcaption text="{{ entry.date }}" class="w-[25%]" />
      <p class="w-[50%]">{{ entry.title }}</p>
      <app-button label="Lire" (click)="navigate(entry.title)" />
    </article>
    } `,
})
export class DiaryEntryInputComponent {
  @Input() diaryEntry: Array<Entries> = diaryEntriesHistory;
  constructor(private router: Router) {}

  navigate(value: string) {
    this.router.navigate(['/profil/' + value]);
  }
}
