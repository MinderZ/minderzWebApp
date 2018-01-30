import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRvwComponent } from './form-rvw.component';

describe('FormRvwComponent', () => {
  let component: FormRvwComponent;
  let fixture: ComponentFixture<FormRvwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRvwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRvwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
