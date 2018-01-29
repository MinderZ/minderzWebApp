import { TestBed, inject } from '@angular/core/testing';

import { RatingServiceService } from './rating-service.service';

describe('RatingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingServiceService]
    });
  });

  it('should be created', inject([RatingServiceService], (service: RatingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
