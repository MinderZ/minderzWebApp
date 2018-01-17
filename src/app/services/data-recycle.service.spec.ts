import { TestBed, inject } from '@angular/core/testing';

import { DataRecycleService } from './data-recycle.service';

describe('DataRecycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataRecycleService]
    });
  });

  it('should be created', inject([DataRecycleService], (service: DataRecycleService) => {
    expect(service).toBeTruthy();
  }));
});
