import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcaptionComponent } from './subcaption.component';

describe('SubcaptionComponent', () => {
  let component: SubcaptionComponent;
  let fixture: ComponentFixture<SubcaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcaptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
