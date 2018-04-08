import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from '../../model/question.model';


@Component({
  selector: 'app-before-asevice-provider',
  templateUrl: './before-asevice-provider.component.html',
  styleUrls: ['./before-asevice-provider.component.css', '../registration/register.component.css', '../../../assets/styles/mainstyle.css']
})

export class BeforeAseviceProviderComponent{

//   hide = true;
//   from = false;
//   checked = false;
//   selected = false;

//   havebeenaVolunteerselected= false;
//   hadPetb4selected= false;
//   HavePetsCurrentlyselected= false;
//   isCompetentToAnimalsselected= false;
//   HaveRefNumberselected= false;
//   HasacriminalRecordselected= false;
//   agreeingToBackgroundCheckselected= false;
//   experienceselected= false;

//   validated = true;
//   constructor(
// public router: Router,
// private question: Questions
//   ) {}

//   ngOnInit() {
//     this.validate();
//   }

// check() {
//       this.checked = !this.checked;
//   }

//   havebeenaVolunteer(input) {
//       this.havebeenaVolunteerselected = input;
//   }

//   hadPetb4( input) {
//     this.hadPetb4selected = input;
//     }

//   HavePetsCurrently( input) {
//     this.HavePetsCurrentlyselected = input;
//     }

//     isCompetentToAnimals( input) {
//     this.isCompetentToAnimalsselected = input;
//     }

//     HaveRefNumber( input) {
//     this.HaveRefNumberselected = input;
//     }

//     HasacriminalRecord( input) {
//     this.HasacriminalRecordselected = input;
//     }

//     agreeingToBackgroundCheck( input) {
//     this.agreeingToBackgroundCheckselected = input;
//     }

//     experience( input) {
//           this.experienceselected = input;
//     }

// validate() {
//   if (
//     this.havebeenaVolunteerselected === false ||
//     this.hadPetb4selected === false ||
//     this.HavePetsCurrentlyselected === false ||
//     this.isCompetentToAnimalsselected === false ||
//     this.HaveRefNumberselected === false ||
//     this.HasacriminalRecordselected === false ||
//     this.agreeingToBackgroundCheckselected === false
//   ) {
// this.validated = true;
//   }else {
// this.validated = false;
//   }
// }




//   newsitter() {
//     this.question.everVolunteeredpetetCare = this.havebeenaVolunteerselected;
//     this.question.everOwnedPets = this.hadPetb4selected;
//     this.question.isCurrentlyOwningPets = this.HavePetsCurrentlyselected;
//     this.question.competentForpets = this.isCompetentToAnimalsselected;
//     this.question.havetwoRefToCall = this.HaveRefNumberselected;
//     this.question.haveACriminalRecord = this.HasacriminalRecordselected;
//     this.question.agreeingForBackgroundCheck = this.agreeingToBackgroundCheckselected;
//     this.question.yearsInEperience = this.havebeenaVolunteerselected;
//     console.log(this.question);

//   this.router.navigate(['/registration']);
// }
}
