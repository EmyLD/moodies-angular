import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarHeaderComponent } from './avatar-header.component';

describe('AvatarHeaderComponent', () => {
  let component: AvatarHeaderComponent;
  let fixture: ComponentFixture<AvatarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
