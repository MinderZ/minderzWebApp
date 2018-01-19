import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterListingsFilterComponent } from './sitter-listings-filter.component';

describe('SitterListingsFilterComponent', () => {
  let component: SitterListingsFilterComponent;
  let fixture: ComponentFixture<SitterListingsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitterListingsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterListingsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
