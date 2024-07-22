import { TestBed } from '@angular/core/testing';

import { SevenService } from './seven.service';

describe('SevenService', () => {
  let service: SevenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
