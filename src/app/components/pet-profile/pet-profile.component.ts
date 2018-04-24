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
 
  constructor(
    private dataRecycleService: DataRecycleService,
    private cacheService: CacheService,
    ) {
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
