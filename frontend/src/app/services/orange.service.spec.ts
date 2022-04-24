import { TestBed } from '@angular/core/testing';

import { OrangeService } from './orange.service';

describe('OrangeService', () => {
  let service: OrangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
