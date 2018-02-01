import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserPetObject } from '../../model/userPetObject.modal';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  
  editing = false;

  petName: string;
  rating: number;
  reviews: number;
  age: number;
  petType: string;

  constructor() {
      this.petName = "Test"
      this.rating = 4.0;
      this.reviews = 10;
      this.age= 6;
      this.petType="Dog";
  }
  ngOnInit() { }
  
   edit() {
     this.editing = !this.editing;
   }

}
