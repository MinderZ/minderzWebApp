import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-1-details',
  templateUrl: './step-1-details.component.html',
  styleUrls: ['./step-1-details.component.css', '../../registration/register.component.css']
})
export class Step1DetailsComponent implements OnInit {
typesOfPets: string[] = ["Cat","Dog","Other"];
stayWithChildren: string[] =
[
"Not ok with children",
"Fine with children of all ages",
"Fine with children over age 2" ,
"Fine with children over age 5" ,
"Fine with children over age 8", 
"Fine with children over age 10"
 ];


 pettype;
 petname;
 gender;
 breed;
 fleeTreatment;
 SWChildren;

  constructor() { }

  ngOnInit() {
  }

setGender( gender: string){
this.gender = gender;
}

}
