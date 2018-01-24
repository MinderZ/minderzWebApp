import { Component, OnInit } from '@angular/core';

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
  referenceName: string;
  referencePhone: string;
  references = new Array();

  constructor() { }

  ngOnInit() {
  }

  addReference() {
    if (this.referenceName !== undefined && this.referencePhone !== undefined) {
      this.references.push(this.referenceName, this.referenceName);
      console.log(this.references[0]);
    }
  }

}
