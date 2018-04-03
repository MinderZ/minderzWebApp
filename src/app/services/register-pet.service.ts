import { Injectable } from '@angular/core';
import { Pet} from '../model/pet';
@Injectable()
export class RegisterPetService {
	 step: number = 1;
  formName: string = "Pet-Details";
Pet: Pet;


constructor() { 
 this.Pet = {
petName: "",
ownerName: "",
OwnerPicture:"",
petPicture : "",
petBreed :"",
emegergencyVetSpendLimimt : "",
emergencyContactName :"",
emergencyContactNr : 0,
pettype : "",
gender : "",
fleeTreatment : 0,
SWChildren : "",
typeOfPet : "",
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
