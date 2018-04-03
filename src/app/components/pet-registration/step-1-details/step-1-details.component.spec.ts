import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1DetailsComponent } from './step-1-details.component';

describe('Step1DetailsComponent', () => {
  let component: Step1DetailsComponent;
  let fixture: ComponentFixture<Step1DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
