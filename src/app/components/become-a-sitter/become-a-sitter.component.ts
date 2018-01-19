import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth-service.service';
import { UserProfileObjet } from '../../model/userProfileObj.model';
import { SitterProfileObject } from '../../model/sitterProfileObject.model';

@Component({
  selector: 'app-become-a-sitter',
  templateUrl: './become-a-sitter.component.html',
  styleUrls: ['./become-a-sitter.component.css', '../../../assets/styles/mainstyle.css']
})
export class BecomeASitterComponent implements OnInit {
  step1 = false;
  step2 = false;
  step3 = false;
  step4 = false;
  hide = true;
  constructor(
    private userservice: UserService,
    private userprof: UserProfileObjet,
    private sitterObj: SitterProfileObject,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.userprof.name = this.auth.getcurrentUser().displayName;
    this.userprof.isAsitter = true;
    //  this.userprof.name =
  }

  addressfield(add) {
    this.userprof.address = add.address;
    this.step1 = false;
  }

  personal(personal) {
    // this.userprof.profilePicture = personal.profilepicture;
    this.userprof.age = personal.age;
    this.userprof.gender = personal.gender;
    this.userprof.Zipcode = personal.zip;
    this.userprof.IdNum = personal.IDNum;
    this.userprof.IdCopy = 'Identity copy here';
    this.userprof.consentForm = 'Consent form here';
    this.userprof.EmerContactName = personal.emergencyname;
    this.userprof.EmerContactNum = personal.emergencynumber;
    this.step2 = false;
    // console.log(this.userprof);
    this.userservice.createProfile(this.userprof);
    console.log(this.userprof);
  }

  sitte(sitter) {
    this.sitterObj.jobRadius = sitter.workingdistance;
    this.sitterObj.PetSizePreference = sitter.petPreferredSize;
    this.sitterObj.PetTypePreference = 'selected pets';
    this.sitterObj.PriceperWalk = sitter.priceperwalk;
    this.sitterObj.PetsperWalk = sitter.petsperwalk;
    this.sitterObj.WalksperDay = sitter.WalkPerDay;
    this.sitterObj.sittingPriceperPet = sitter.priceperpet;
    this.sitterObj.sittingPetsperDay = sitter.petsperday;
    this.sitterObj.HouseSittingPrice = sitter.HouseSittingPrice;
    this.sitterObj.dropInVisitsPrice = sitter.pricepervisit;
    this.sitterObj.VisitsperDay = sitter.visitsperday;
    console.log(this.sitterObj);
    this.step3 = false;
  }

  sittingdetails(sit) {
    this.sitterObj.HouseType = sit.houseType;
    this.sitterObj.Children = sit.children;
    this.sitterObj.Experience = sit.experience;
    this.sitterObj.HeadLine = sit.headline;
    this.sitterObj.bio = sit.bio;
    // this.sitterObj.DoneVolunter = sit.volunterPets;
    this.sitterObj.OwnPets = sit.ownPets;
    this.sitterObj.hadPets = sit.ownedPets;
    this.sitterObj.Reference1Name = sit.ref1Name1;
    this.sitterObj.Reference1Phone = sit.ref1Phone;
    this.sitterObj.Reference2Name = sit.ref2Name;
    this.sitterObj.Reference2Phone = sit.ref2Phone;
    this.userservice.createSitterProfile(this.sitterObj);
  }

  //   save(user) {
  // this.userservice.createProfile(user);
  //   }
}
