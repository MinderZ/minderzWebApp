import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterReg2Component } from './sitter-reg-2.component';

describe('SitterReg2Component', () => {
  let component: SitterReg2Component;
  let fixture: ComponentFixture<SitterReg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitterReg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterReg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
