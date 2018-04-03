import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2PreferenceComponent } from './step-2-preference.component';

describe('Step2PreferenceComponent', () => {
  let component: Step2PreferenceComponent;
  let fixture: ComponentFixture<Step2PreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2PreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2PreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
