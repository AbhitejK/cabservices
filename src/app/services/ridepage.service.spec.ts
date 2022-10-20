import { TestBed } from '@angular/core/testing';

import { RidepageService } from './ridepage.service';

describe('RidepageService', () => {
  let service: RidepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RidepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
