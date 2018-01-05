import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetReg2Component } from './pet-reg-2.component';

describe('PetReg2Component', () => {
  let component: PetReg2Component;
  let fixture: ComponentFixture<PetReg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetReg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetReg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
