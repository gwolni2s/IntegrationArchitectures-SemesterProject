import { TestBed } from '@angular/core/testing';

import { BonusComputationSheetService } from './bonus-computation-sheet.service';

describe('BonusComputationSheetService', () => {
  let service: BonusComputationSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonusComputationSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
