import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterReg4Component } from './sitter-reg-4.component';

describe('SitterReg4Component', () => {
  let component: SitterReg4Component;
  let fixture: ComponentFixture<SitterReg4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitterReg4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterReg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
