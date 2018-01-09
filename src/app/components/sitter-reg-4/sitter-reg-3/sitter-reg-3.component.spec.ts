import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterReg3Component } from './sitter-reg-3.component';

describe('SitterReg3Component', () => {
  let component: SitterReg3Component;
  let fixture: ComponentFixture<SitterReg3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitterReg3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterReg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
