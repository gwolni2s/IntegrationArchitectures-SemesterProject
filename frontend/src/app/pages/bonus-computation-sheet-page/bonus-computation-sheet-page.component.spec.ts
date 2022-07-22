import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusComputationSheetPageComponent } from './bonus-computation-sheet-page.component';

describe('BonusComputationSheetPageComponent', () => {
  let component: BonusComputationSheetPageComponent;
  let fixture: ComponentFixture<BonusComputationSheetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusComputationSheetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusComputationSheetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
