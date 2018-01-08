import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterReg1Component } from './sitter-reg-1.component';

describe('SitterReg1Component', () => {
  let component: SitterReg1Component;
  let fixture: ComponentFixture<SitterReg1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitterReg1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterReg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
