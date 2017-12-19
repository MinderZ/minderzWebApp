import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCloudWelcomeComponent } from './pet-cloud-welcome.component';

describe('PetCloudWelcomeComponent', () => {
  let component: PetCloudWelcomeComponent;
  let fixture: ComponentFixture<PetCloudWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetCloudWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCloudWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
