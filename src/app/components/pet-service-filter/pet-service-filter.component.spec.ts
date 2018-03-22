import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetServiceFilterComponent } from './pet-service-filter.component';

describe('PetServiceFilterComponent', () => {
  let component: PetServiceFilterComponent;
  let fixture: ComponentFixture<PetServiceFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetServiceFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetServiceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
