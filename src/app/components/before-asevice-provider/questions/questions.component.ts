import { Questions } from '../../../model/question.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css','../../registration/register.component.css'],
})
export class QuestionsComponent implements OnInit {

  validated = false;


  havebeenaVolunteerselected;
  hadPetb4selected;
  HavePetsCurrentlyselected;
  isCompetentToAnimalsselected;
  HaveRefNumberselected;
  HasacriminalRecordselected;
  agreeingToBackgroundCheckselected;
  experienceselected;


  constructor(
public router: Router,
private question: Questions
  	) { }

  ngOnInit() {
  }


  	havebeenaVolunteer(input) {
      this.havebeenaVolunteerselected = input;
 	}

    hadPetb4( input) {
    this.hadPetb4selected = input;
    }

    HavePetsCurrently( input) {
    this.HavePetsCurrentlyselected = input;
    }

    isCompetentToAnimals( input) {
    this.isCompetentToAnimalsselected = input;
    }

    HaveRefNumber( input) {
    this.HaveRefNumberselected = input;
    }

    HasacriminalRecord( input) {
    this.HasacriminalRecordselected = input;
    }

    agreeingToBackgroundCheck( input) {
    this.agreeingToBackgroundCheckselected = input;
    }

    experience( input) {
          this.experienceselected = input;
    }

    ques() {
    this.question.everVolunteeredpetetCare = this.havebeenaVolunteerselected;
    this.question.everOwnedPets = this.hadPetb4selected;
    this.question.isCurrentlyOwningPets = this.HavePetsCurrentlyselected;
    this.question.competentForpets = this.isCompetentToAnimalsselected;
    this.question.havetwoRefToCall = this.HaveRefNumberselected;
    this.question.haveACriminalRecord = this.HasacriminalRecordselected;
    this.question.agreeingForBackgroundCheck = this.agreeingToBackgroundCheckselected;
    this.question.yearsInEperience = this.havebeenaVolunteerselected;
    console.table(this.question);
  	this.router.navigate(['/registration']);}

  	validate() {
 	 if (
    	this.havebeenaVolunteerselected === false ||
    	this.hadPetb4selected === false ||
    	this.HavePetsCurrentlyselected === false ||
    	this.isCompetentToAnimalsselected === false ||
    	this.HaveRefNumberselected === false ||
    	this.HasacriminalRecordselected === false ||
    	this.agreeingToBackgroundCheckselected === false) {
	this.validated = true;
    }else {
	this.validated = false;
  }
}


}
