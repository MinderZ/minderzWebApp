import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterProfileCardComponent } from './sitter-profile-card.component';

describe('SitterProfileCardComponent', () => {
  let component: SitterProfileCardComponent;
  let fixture: ComponentFixture<SitterProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitterProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
