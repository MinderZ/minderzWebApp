import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserPetObject } from '../../model/userPetObject.modal';
import { CacheService } from "../../services/cache.service";
import { Pet} from '../../model/pet';
import { DataRecycleService } from '../../services/data-recycle.service';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {
AllMyPets: Array<Pet>;
  
  editing = false;

  petName: string;
  rating: number;
  reviews: number;
  age: number;
  petType: string;

  constructor(
    private dataRecycleService: DataRecycleService,
    private cacheService: CacheService,
    ) {
      this.petName = "Test";   this.rating = 4.0;  this.reviews = 10;  this.age= 6; this.petType="Dog";
if (this.cacheService.currentUserPets === null || this.cacheService.currentUserPets === undefined) { 
  this.dataRecycleService.getUserPets().subscribe(response =>{
      this.cacheService.currentUserPets = response as Pet; 
      this.AllMyPets = [response as Pet];
    }) 
} else {
  this.AllMyPets = [this.cacheService.currentUserPets];
}


  
 


  }
  ngOnInit() { }
  
   edit() {
     this.editing = !this.editing;
   }

}
