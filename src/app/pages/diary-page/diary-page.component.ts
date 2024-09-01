import { Component } from '@angular/core';
import { diaryEntryDetails } from '../../lib/datas/diaryEntryDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { H2TitleComponent } from '../../components/h2-title/h2-title.component';
import { SubcaptionComponent } from '../../components/subcaption/subcaption.component';
import { DiaryEntryInputComponent } from '../../components/diary-entry-input/diary-entry-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-diary-page',
  standalone: true,
  imports: [
    H2TitleComponent,
    SubcaptionComponent,
    DiaryEntryInputComponent,
    ButtonComponent,
    FontAwesomeModule,
  ],
  templateUrl: './diary-page.component.html',
  styleUrl: './diary-page.component.scss',
})
export class DiaryPageComponent {
  iconPen = faPenToSquare;
  iconTrash = faTrashCan;
  oneEntryDetail = diaryEntryDetails;
  title: string | null = '';
  content: string = '';
  date: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.title = params.get('title');
    });

    if (this.title !== '') {
      const relatedEntry = this.oneEntryDetail.find(
        (entry) => entry.title === this.title
      );
      if (relatedEntry) {
        this.content = relatedEntry.content;
        this.title = relatedEntry.title;
        this.date = relatedEntry.date;
      } else {
        this.navigate();
      }
    }
  }

  onClickModify(value: string | null) {
    let getTitle = this.oneEntryDetail.find(
      (entry) => entry.title === this.title
    );
    if (getTitle) {
      this.title = 'coucou';
    }
  }

  onClickDelete() {
    console.log('delete');
  }

  navigate() {
    if (this.route) {
      this.router.navigate(['/profil']);
    }
  }
}
