import { TestBed, inject } from '@angular/core/testing';

import { ClientRegisterService } from './client-register.service';

describe('ClientRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientRegisterService]
    });
  });

  it('should be created', inject([ClientRegisterService], (service: ClientRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
