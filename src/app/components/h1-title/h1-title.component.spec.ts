import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1TitleComponent } from './h1-title.component';

describe('H1TitleComponent', () => {
  let component: H1TitleComponent;
  let fixture: ComponentFixture<H1TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H1TitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H1TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
