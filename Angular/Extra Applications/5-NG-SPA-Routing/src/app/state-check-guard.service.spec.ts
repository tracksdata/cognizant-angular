import { TestBed, inject } from '@angular/core/testing';

import { StateCheckGuardService } from './state-check-guard.service';

describe('StateCheckGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateCheckGuardService]
    });
  });

  it('should be created', inject([StateCheckGuardService], (service: StateCheckGuardService) => {
    expect(service).toBeTruthy();
  }));
});
