import { TestBed } from '@angular/core/testing';

import { ResultservicesService } from './resultservices.service';

describe('ResultservicesService', () => {
  let service: ResultservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
