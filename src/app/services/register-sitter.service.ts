import { Injectable } from "@angular/core";
import { SitterProfileObject } from "../model/sitterProfileObject.model";
import { SitterReferenceObject } from "../model/sitterReferenceObject.model";

@Injectable()
export class RegisterSitterService {
  step: number = 1;
  formName: string = "Location";
  sitter: SitterProfileObject;

  constructor() {
    this.sitter = {
        aboutMe: "",
        jobRadius: 0,
        age: 0,
        id: "",
        gender:"",
        serviceMap:  new Map<string, boolean>(),
        petsMap:  new Map<string, boolean>(),
        dogWalking: {
            pricePerWalk: 0,
            petsPerWalk: 0,
            walksPerDay: 0,
        },
    
        petSitting: {
            pricePerPet: 0,
            petsPerDay: 0,
    
        },
    
        houseSitting: {
            pricePerDay: 0,
        },
    
        dropInVist:{
            pricePerVisit: 0,
            visitsPerDay: 0,
        },
        cellphoneNumber:"",
        houseType: "",
        children: false,
        experience: "",
        doneVolunteer: false,
        ownPets: false,
        hadPets: false,
        coordinates: {
            lat: 0,
            lng: 0
        },
        profilePicture: null,
        copyOfId: null,
        consentForm:  null,
        references: new Array<SitterReferenceObject>(),
        location: "",
        emergencyContactName: "",
        emergencyContactNr: "",
    };
  }

  getSitterProfileObject() {
    return this.sitter;
  }

  setSitterProfileObject(sitter) {
    this.sitter = sitter;
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
        this.formName = "Location";
        break;
      case 2:
        this.formName = "Personal Details";
        break;
      case 3:
        this.formName = "Sitter Preferences";
        break;
      case 4:
        this.formName = "Sitter Details";
        break;
    }
  }
}
