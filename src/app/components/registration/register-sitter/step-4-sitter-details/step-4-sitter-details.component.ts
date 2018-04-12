import { Component, OnInit } from '@angular/core';
import { SitterReferenceObject } from '../../../../model/sitterReferenceObject.model';
import { RegisterService } from '../../../../services/register.service';
import { ClientRegisterService } from '../../../../services/client-register.service';
import { DataRecycleService } from '../../../../services/data-recycle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-4-sitter-details',
  templateUrl: './step-4-sitter-details.component.html',
  styleUrls: ['./step-4-sitter-details.component.css', '../../register.component.css']
})
export class Step4SitterDetailsComponent implements OnInit {


  houseTypeOption: string[] = ["Flat", "House with Yard", "House without Yard"];
  houseType: string;

  experienceOption: string[] = ["No experience", "1+", "2+", "3+", "4+"];
  experience: string;
  aboutMe: string;

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

  constructor(
    private router: Router, 
    private dataRecycle: DataRecycleService, 
    protected registerService: RegisterService, 
    private clientRegisterService: ClientRegisterService) { }

  ngOnInit() {
  }


  setChildren(value: boolean) {
    this.children = value;
    this.childrenPristine = false;
  }

  setVolunteer(value: boolean) {
    this.volunteer = value;
  }

  setOwnsPets(value: boolean) {
    this.ownPets = value;
  }
  setHasOwnedPets(value: boolean) {
    this.ownedPets = value;
  }

  addReference() {
    if (this.validateReference()) {

      this.reference = new SitterReferenceObject;

      this.reference.referenceName = this.referenceName;
      this.reference.referencePhone = this.referencePhone;

      this.registerService.sitter.references.push(this.reference);

      this.creatingReference = false;
      this.referenceName = '';
      this.referencePhone = '';
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



  validate() {
    if (!this.childrenPristine && !this.ownPetsPristine && !this.volunteer) {

      if (!this.ownPets && !this.ownedPetsPristine) {
        this.valid = true;
      } else {
        this.valid = false;
      }

    } else {
      this.valid = false;
    }
  }

  submit() {
    this.registerService.sitter.aboutMe = this.aboutMe;
    this.registerService.sitter.houseType = this.houseType;
    this.registerService.sitter.experience = this.experience;
    this.registerService.sitter.children = this.children;
    this.registerService.sitter.doneVolunteer = this.volunteer;
    this.registerService.sitter.ownPets = this.ownPets;
    this.registerService.sitter.hadPets = this.ownedPets;
    this.registerService.sitter.references = this.references;

    this.clientRegisterService.client.isServiceProvider = true;
    this.clientRegisterService.client.serviceProvider = this.registerService.sitter;

    this.clientRegisterService.step = 1;

    console.table(this.clientRegisterService.client);
    this.dataRecycle.registerUser(this.clientRegisterService.client);
    this.router.navigate(['home']);
  }
}
