import { Questions } from '../../../model/question.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../services/register.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css','../../registration/register.component.css'],
})
export class QuestionsComponent implements OnInit {
questionair:Questions
  validated = false;


  havebeenaVolunteerselected;
  hadPetb4selected;
  HavePetsCurrentlyselected;
  isCompetentToAnimalsselected;
  HaveRefNumberselected;
  HasacriminalRecordselected;
  agreeingToBackgroundCheckselected;
  experienceselected;

  havebeenaVolunteer1;
  hadPetb41;
  HavePetsCurrently1;
  isCompetentToAnimals1;
  HaveRefNumber1;
  HasacriminalRecord1;
  agreeingToBackgroundCheck1;
  experience1;


  constructor(
private router: Router,
private registerService: RegisterService,
  	) {	}

  ngOnInit() {
  }


  	havebeenaVolunteer(input) {
      this.havebeenaVolunteer1 = input;
 	}

    hadPetb4( input) {
    this.hadPetb41 = input;
    }

    HavePetsCurrently( input) {
    this.HavePetsCurrently1 = input;
    }

    isCompetentToAnimals( input) {
    this.isCompetentToAnimals1 = input;
    }

    HaveRefNumber( input) {
    this.HaveRefNumber1 = input;
    }

    HasacriminalRecord( input) {
    this.HasacriminalRecord1 = input;
    }

    agreeingToBackgroundCheck( input) {
    this.agreeingToBackgroundCheck1 = input;
    }

    experience( input) {
          this.experience1 = input;
    }

    ques() {
    this.questionair.everVolunteeredpetetCare = this.havebeenaVolunteer1;
    this.questionair.everOwnedPets = this.hadPetb41;
    this.questionair.isCurrentlyOwningPets = this.HavePetsCurrently1;
    this.questionair.competentForpets = this.isCompetentToAnimals1;
    this.questionair.havetwoRefToCall = this.HaveRefNumber1;
    this.questionair.haveACriminalRecord = this.HasacriminalRecord1;
    this.questionair.agreeingForBackgroundCheck = this.agreeingToBackgroundCheck1;
    this.questionair.yearsInEperience = this.experience1;
    console.table(this.questionair);
    this.registerService.sitter.sitterQuestionair = this.questionair;
  	this.router.navigate(['/registration']);}

//   	validate() {
//  	 if (
//     	this.havebeenaVolunteerselected === false ||
//     	this.hadPetb4selected === false ||
//     	this.HavePetsCurrentlyselected === false ||
//     	this.isCompetentToAnimalsselected === false ||
//     	this.HaveRefNumberselected === false ||
//     	this.HasacriminalRecordselected === false ||
//     	this.agreeingToBackgroundCheckselected === false) {
// 	this.validated = true;
//     }else {
// 	this.validated = false;
//   }
// }


}
