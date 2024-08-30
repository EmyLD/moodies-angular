import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryEntryInputComponent } from './diary-entry-input.component';

describe('DiaryEntryInputComponent', () => {
  let component: DiaryEntryInputComponent;
  let fixture: ComponentFixture<DiaryEntryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryEntryInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryEntryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
