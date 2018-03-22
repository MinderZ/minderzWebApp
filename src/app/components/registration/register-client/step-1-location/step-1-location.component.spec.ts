import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1LocationComponent } from './step-1-location.component';

describe('Step1LocationComponent', () => {
  let component: Step1LocationComponent;
  let fixture: ComponentFixture<Step1LocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1LocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
