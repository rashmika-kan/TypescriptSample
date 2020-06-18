import { TestBed } from '@angular/core/testing';

import { BiscuitServiceService } from './biscuit-service.service';

describe('BiscuitServiceService', () => {
  let service: BiscuitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiscuitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
