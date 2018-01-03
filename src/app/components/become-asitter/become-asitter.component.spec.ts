import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAsitterComponent } from './become-asitter.component';

describe('BecomeAsitterComponent', () => {
  let component: BecomeAsitterComponent;
  let fixture: ComponentFixture<BecomeAsitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeAsitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeAsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
