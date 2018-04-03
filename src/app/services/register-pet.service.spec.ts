import { TestBed, inject } from '@angular/core/testing';

import { RegisterPetService } from './register-pet.service';

describe('RegisterPetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterPetService]
    });
  });

  it('should be created', inject([RegisterPetService], (service: RegisterPetService) => {
    expect(service).toBeTruthy();
  }));
});
