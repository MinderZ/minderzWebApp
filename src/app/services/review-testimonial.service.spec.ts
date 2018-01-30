import { TestBed, inject } from '@angular/core/testing';

import { ReviewTestimonialService } from './review-testimonial.service';

describe('ReviewTestimonialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewTestimonialService]
    });
  });

  it('should be created', inject([ReviewTestimonialService], (service: ReviewTestimonialService) => {
    expect(service).toBeTruthy();
  }));
});
