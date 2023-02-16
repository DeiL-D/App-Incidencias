import { TestBed } from '@angular/core/testing';

import { HasRoleGuard } from './auth.guard.ts.guard';

describe('AuthGuardTsGuard', () => {
  let guard: HasRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
