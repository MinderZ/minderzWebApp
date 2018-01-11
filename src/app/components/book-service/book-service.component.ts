import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth-service.service';
import { UserProfileObjet } from '../../model/userProfileObj.model';
import { Personal, Address } from '../../../../../../../Documents/GitLab/src/app/data/formData.model';
import { log } from 'util';
import { SitterProfileObject } from '../../model/sitterProfileObject.model';

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})
export class BookServiceComponent implements OnInit {
  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  constructor(
    private userservice: UserService,
    private userprof: UserProfileObjet,
    private sitterObj: SitterProfileObject,
    private auth: AuthService
  ) {

   }

  ngOnInit() {
   this.userprof.name = this.auth.getcurrentUser().displayName;
   this.userprof.isAsitter = true;
  //  this.userprof.name =

  }

personal(add) {
this.userprof.address = add.address;
this.step1 = false;
}
persona(personal) {
  this.userprof.profilePicture = 'Profile picture here';
  this.userprof.age = personal.age;
  this.userprof.gender = personal.gender;
  this.userprof.Zipcode = personal.zip;
  this.userprof.IdNum = personal.IDNum;
  this.userprof.IdCopy = 'Identity copy here';
  this.userprof.consentForm = 'Consent form here';
  this.userprof.EmerContactName = personal.emergencyname;
  this.userprof.EmerContactNum = personal.emergencynumber;
  this.step2 = false;
this.userservice.createProfile(this.userprof);
console.log(this.userprof);
}


sit(sitter) {
this.sitterObj.jobRadius = sitter.workingdistance;
this.sitterObj.PetSizePreference = sitter.petPreferredSize;
this.sitterObj.PetTypePreference = 'still on working all those selected pets';
this.sitterObj.PriceperWalk = sitter.priceperwalk;
this.sitterObj.PetsperWalk = sitter.petsperwalk;
this.sitterObj.WalksperDay = sitter.WalkPerDay;
this.sitterObj.sittingPriceperPet = sitter.priceperpet;
this.sitterObj.sittingPetsperDay = sitter.petsperday;
this.sitterObj.HouseSittingPrice = sitter.HouseSittingPrice;
this.sitterObj.dropInVisitsPrice = sitter.pricepervisit;
this.sitterObj.VisitsperDay = sitter.visitsperday;
this.sitterObj.HouseType = sitter.houseType;
this.sitterObj.Children = sitter.children;
this.sitterObj.Experience = sitter.experience;
this.sitterObj.HeadLine = sitter.headline;
this.sitterObj.bio = sitter.bio;
this.sitterObj.DoneVolunter = sitter.volunterPets;
this.sitterObj.OwnPets = sitter.ownPets;
this.sitterObj.hadPets = sitter.ownedPets;
this.sitterObj.Reference1Name = sitter.ref1Name1;
this.sitterObj.Reference1Phone = sitter.ref1Phone;
this.sitterObj.Reference2Name = sitter.ref2Name;
this.sitterObj.Reference2Phone = sitter.ref2Phone;
console.log(this.sitterObj);
this.step3 = false;
}

  save(user) {
this.userservice.createProfile(user);
  }


}
