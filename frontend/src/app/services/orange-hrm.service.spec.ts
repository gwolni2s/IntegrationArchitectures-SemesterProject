import { TestBed } from '@angular/core/testing';

import { OrangeHRMService } from './orange-hrm.service';

describe('OrangeHRMService', () => {
  let service: OrangeHRMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrangeHRMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
