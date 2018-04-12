import { Injectable } from '@angular/core';
import { Pet} from '../model/pet';
import { CacheService } from '../services/cache.service';
import { SitterReferenceObject } from "../model/sitterReferenceObject.model";

@Injectable()
export class RegisterPetService {
	 step: number = 1;
  formName: string = "Pet-Details";
Pet: Pet;


constructor( private cacheService: CacheService,) { 
 this.Pet = {
petName: "",
ownerName: 'owner name',
OwnerPicture: 'owner picture',
// this.cacheService.currentSitter.fullName,
// this.cacheService.currentSitter.profilePicture,
petPicture : "",
petBreed :"",
references: new Array<SitterReferenceObject>(),
emegergencyVetSpendLimimt : "",
pettype : "",
gender : "",
fleeTreatment : 0,
stayWithChildren : "" ,
}

  } 


back() {
    this.step -= 1;
    this.changeFormName(this.step);
  }
  next() {
    this.step += 1;
    this.changeFormName(this.step);
  }

  changeFormName(step: number) {
    switch (step) {
      case 1:
        this.formName = "Pet-Details";
        break;
      case 2:
        this.formName = "Pet-Preference";
        break;
    }
  }

  submit() {
    this.step = 0;
  }

}
