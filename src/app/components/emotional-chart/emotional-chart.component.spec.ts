import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalChartComponent } from './emotional-chart.component';

describe('EmotionalChartComponent', () => {
  let component: EmotionalChartComponent;
  let fixture: ComponentFixture<EmotionalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmotionalChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
