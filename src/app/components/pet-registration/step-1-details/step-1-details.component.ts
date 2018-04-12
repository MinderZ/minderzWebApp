import { Component, OnInit } from '@angular/core';
import { RegisterPetService } from '../../../services/register-pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-1-details',
  templateUrl: './step-1-details.component.html',
  styleUrls: ['./step-1-details.component.css', '../../registration/register.component.css']
})
export class Step1DetailsComponent implements OnInit {
typesOfPets: string[] = ["Cat","Dog","Other"];
stayWithChildren: string[] =
[
"Not okay with children",
"Fine with children of all ages",
"Fine with children over age 2" ,
"Fine with children over age 5" ,
"Fine with children over age 8", 
"Fine with children over age 10"
 ];

valid:boolean;
 pettype = this.typesOfPets[0];
 SWChildren = this.stayWithChildren[0];
 pettypePrestine;

 petname;
 petnamePrestine;

 gender;
 genderPrestine;

 breed;
 breedPrestine;

 fleeTreatment;
 fleeTreatmentPrestine;

 SWChildrenPrestine;

  constructor(
  	protected registerService:RegisterPetService,
  	 private router: Router,
	) {  
  }

  ngOnInit() {
  	// this.validate();
  }

setGender( gender: string){
this.gender = gender;
}

validate(){
	if (
		this.breed === null || this.breed === undefined &&
		this.petname === null || this.petname === undefined &&
		this.SWChildren === null || this.SWChildren === undefined &&
		this.fleeTreatment === null || this.fleeTreatment === undefined &&
		this.gender === null || this.gender === undefined &&
		this.pettype === null || this.pettype === undefined 
		) { 
		this.valid = true
	} else {
		this.valid = false
	}
}

cancel(){ 
	 this.router.navigate(['bookingprofile']);
}

next(){
this.registerService.Pet.petName = this.petname;
this.registerService.Pet.gender = this.gender;
this.registerService.Pet.fleeTreatment = this.fleeTreatment;
this.registerService.Pet.stayWithChildren = this.SWChildren;
this.registerService.Pet.petBreed = this.breed; 
this.registerService.Pet.pettype = this.pettype; 
console.table(this.registerService.Pet)
	 this.registerService.next()
}

}
