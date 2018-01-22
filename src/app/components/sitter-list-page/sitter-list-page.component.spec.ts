import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterListPageComponent } from './sitter-list-page.component';

describe('SitterListPageComponent', () => {
  let component: SitterListPageComponent;
  let fixture: ComponentFixture<SitterListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitterListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
