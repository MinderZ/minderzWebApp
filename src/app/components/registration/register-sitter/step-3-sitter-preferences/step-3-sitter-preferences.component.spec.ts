import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3SitterPreferencesComponent } from './step-3-sitter-preferences.component';

describe('Step3SitterPreferencesComponent', () => {
  let component: Step3SitterPreferencesComponent;
  let fixture: ComponentFixture<Step3SitterPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3SitterPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3SitterPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
