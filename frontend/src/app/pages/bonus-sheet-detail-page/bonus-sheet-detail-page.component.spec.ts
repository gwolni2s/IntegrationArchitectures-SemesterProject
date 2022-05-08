import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusSheetDetailPageComponent } from './bonus-sheet-detail-page.component';

describe('BonusSheetDetailPageComponent', () => {
  let component: BonusSheetDetailPageComponent;
  let fixture: ComponentFixture<BonusSheetDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusSheetDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusSheetDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
