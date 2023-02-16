import { TestBed } from '@angular/core/testing';

import { ADMINONLYGuard } from './adminonly.guard';

describe('ADMINONLYGuard', () => {
  let guard: ADMINONLYGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ADMINONLYGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
