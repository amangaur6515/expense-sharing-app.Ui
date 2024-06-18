import { TestBed } from '@angular/core/testing';

import { ExpenseManagementService } from './expense-management.service';

describe('ExpenseManagementService', () => {
  let service: ExpenseManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
