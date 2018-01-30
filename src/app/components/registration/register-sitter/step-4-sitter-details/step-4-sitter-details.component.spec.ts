import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4SitterDetailsComponent } from './step-4-sitter-details.component';

describe('Step4SitterDetailsComponent', () => {
  let component: Step4SitterDetailsComponent;
  let fixture: ComponentFixture<Step4SitterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step4SitterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4SitterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
