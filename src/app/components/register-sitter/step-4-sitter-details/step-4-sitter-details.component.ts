import { Component, OnInit } from '@angular/core';
import { RegisterSitterComponent } from '../register-sitter.component';
import { RegisterSitterService } from '../../../services/register-sitter.service';
import { SitterReferenceObject } from '../../../model/sitterReferenceObject.model';

@Component({
  selector: 'app-step-4-sitter-details',
  templateUrl: './step-4-sitter-details.component.html',
  styleUrls: ['./step-4-sitter-details.component.css']
})
export class Step4SitterDetailsComponent implements OnInit {

  //Children button group
  children = false;
  childrenPristine = true;

  //Volunteer button group
  volunteer = false;
  volunteerPristine = true;

  //Own pets button group
  ownPets = false;
  ownPetsPristine = true;

  //Owned pets button group
  ownedPets = false;
  ownedPetsPristine = true;

  //Refernces
  creatingReference = false;
  reference: SitterReferenceObject;
  referenceName: string;
  referencePhone: string;
  references = new Array();

  constructor(private registerService: RegisterSitterService) { }

  ngOnInit() {
  }

  addReference() {
    if (this.referenceName !== undefined && this.referencePhone !== undefined) {
      this.reference = new SitterReferenceObject;

      this.reference.referenceName = this.referenceName;
      this.reference.referencePhone = this.referencePhone;

      this.registerService.sitter.references.push(this.reference);
    }
  }

  update() {
    this.registerService.sitter.children = this.children;
    this.registerService.sitter.doneVolunteer = this.volunteer;
    this.registerService.sitter.ownPets = this.ownPets;
    this.registerService.sitter.hadPets = this.ownedPets;
  }

}
