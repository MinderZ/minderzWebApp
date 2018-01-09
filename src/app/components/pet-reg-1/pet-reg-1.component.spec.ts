import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetReg1Component } from './pet-reg-1.component';

describe('PetReg1Component', () => {
  let component: PetReg1Component;
  let fixture: ComponentFixture<PetReg1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetReg1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetReg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
