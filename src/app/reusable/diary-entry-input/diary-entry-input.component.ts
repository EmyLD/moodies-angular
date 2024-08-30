import { Component, Input } from '@angular/core';
import { SubcaptionComponent } from '../subcaption/subcaption.component';
import { diaryEntriesHistory } from '../../../datas/diaryEntriesHistory';
import { CommonModule } from '@angular/common';
import { Entries } from '../../../utils/definition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary-entry-input',
  standalone: true,
  imports: [SubcaptionComponent, CommonModule],
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
