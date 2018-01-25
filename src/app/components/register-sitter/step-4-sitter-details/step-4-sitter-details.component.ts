import { Component, OnInit } from '@angular/core';
import { RegisterSitterComponent } from '../register-sitter.component';
import { RegisterSitterService } from '../../../services/register-sitter.service';
import { SitterReferenceObject } from '../../../model/sitterReferenceObject.model';

@Component({
  selector: 'app-step-4-sitter-details',
  templateUrl: './step-4-sitter-details.component.html',
  styleUrls: ['./step-4-sitter-details.component.css',
  '../register-sitter.component.css']
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
  validReferenceName = true;
  referencePhone: string;
  validReferencePhone = true;
  references = new Array();

  //Valid form
  valid = false;

  constructor(protected registerService: RegisterSitterService) { }

  ngOnInit() {
  }

  addReference() {
    if (this.validateReference()) {

      this.reference = new SitterReferenceObject;

      this.reference.referenceName = this.referenceName;
      this.reference.referencePhone = this.referencePhone;

      this.registerService.sitter.references.push(this.reference);
    }
  }

  validateReference() {
    if (this.referenceName !== undefined && this.referencePhone !== undefined && this.referencePhone.length === 10) {
      this.validReferenceName = true;
      this.validReferencePhone = true;
      return true;

    } else if (this.referenceName === undefined && this.referencePhone === undefined) {
      this.validReferenceName = false;
      this.validReferencePhone = false;
      return false;

    } else if (this.referenceName !== undefined && this.referencePhone === undefined || this.referencePhone.length !== 10) {
      this.validReferenceName = true;
      this.validReferencePhone = false;
      return false;
    } else {
      this.validReferenceName = false;
      this.validReferencePhone = true;
      return false;
    }
  }

  update() {
    this.registerService.sitter.children = this.children;
    this.registerService.sitter.doneVolunteer = this.volunteer;
    this.registerService.sitter.ownPets = this.ownPets;
    this.registerService.sitter.hadPets = this.ownedPets;
  }

  validate() {
    if (!this.childrenPristine && !this.ownPetsPristine && !this.volunteer) {

      if (!this.ownPets && !this.ownedPetsPristine) {
        this.valid = true;
        this.update();
      } else {
        this.valid = false;
      }

    } else {
      this.valid = false;
    }
  }

}
