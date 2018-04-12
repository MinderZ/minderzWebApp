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
  expert: string[] =
[
"None",
"1-2 Years",
"3-5 Years" ,
"5+ Years" , 
 ];
  validated = false;


  havebeenaVolunteerselected = false;
  hadPetb4selected = false;
  HavePetsCurrentlyselected = false;
  isCompetentToAnimalsselected = false;
  HaveRefNumberselected = false;
  HasacriminalRecordselected = false;
  agreeingToBackgroundCheckselected = false;
  experienceselected =false;

  havebeenaVolunteer1;
  hadPetb41;
  HavePetsCurrently1;
  isCompetentToAnimals1;
  HaveRefNumber1;
  HasacriminalRecord1;
  agreeingToBackgroundCheck1;
  experience1 = this.expert[0];
  


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
    // console.log(this.agreeingToBackgroundCheck1);
    }

    // experience( input) {
    //       this.experience1 = input;
    // }

    ques() {
    this.registerService.questionair.everVolunteeredpetetCare = this.havebeenaVolunteer1;
    this.registerService.questionair.everOwnedPets = this.hadPetb41;
    this.registerService.questionair.isCurrentlyOwningPets = this.HavePetsCurrently1;
    this.registerService.questionair.competentForpets = this.isCompetentToAnimals1;
    this.registerService.questionair.havetwoRefToCall = this.HaveRefNumber1;
    this.registerService.questionair.haveACriminalRecord = this.HasacriminalRecord1;
    this.registerService.questionair.agreeingForBackgroundCheck = this.agreeingToBackgroundCheck1;
    this.registerService.questionair.yearsInEperience = this.experience1;
    console.table(this.registerService.questionair);
    this.registerService.sitter.sitterQuestionair = this.registerService.questionair;
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
