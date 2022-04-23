import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPerformancePageComponent } from './social-performance-page.component';

describe('SocialPerformancePageComponent', () => {
  let component: SocialPerformancePageComponent;
  let fixture: ComponentFixture<SocialPerformancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialPerformancePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialPerformancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
