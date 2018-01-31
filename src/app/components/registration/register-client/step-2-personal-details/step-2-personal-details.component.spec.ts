import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2PersonalDetailsComponent } from './step-2-personal-details.component';

describe('Step2PersonalDetailsComponent', () => {
  let component: Step2PersonalDetailsComponent;
  let fixture: ComponentFixture<Step2PersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2PersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2PersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
