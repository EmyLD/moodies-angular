import { Component } from '@angular/core';
import { diaryEntryDetails } from '../../datas/diaryEntryDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { H2TitleComponent } from '../reusable/h2-title/h2-title.component';
import { SubcaptionComponent } from '../reusable/subcaption/subcaption.component';

@Component({
  selector: 'app-diary-page',
  standalone: true,
  imports: [H2TitleComponent, SubcaptionComponent],
  templateUrl: './diary-page.component.html',
  styleUrl: './diary-page.component.scss',
})
export class DiaryPageComponent {
  oneEntryDetail = diaryEntryDetails;
  title: string | null = '';
  content: string = '';
  date: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.title = params.get('title');
      console.log(this.title);
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

  navigate() {
    if (this.route) {
      this.router.navigate(['/profil']);
    }
  }
}
