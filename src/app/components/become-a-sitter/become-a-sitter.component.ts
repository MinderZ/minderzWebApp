import { Component, OnInit,  NgZone, ElementRef} from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth-service.service';
import { UserProfileObjet } from '../../model/userProfileObj.model';
import { SitterProfileObject } from '../../model/sitterProfileObject.model';
// import { Personal } from '../../../../../../../Documents/GitLab/src/app/data/formData.model';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-become-a-sitter',
  templateUrl: './become-a-sitter.component.html',
  styleUrls: ['./become-a-sitter.component.css']
})
export class BecomeASitterComponent implements OnInit {

@ViewChild('address') public addressElementRef: ElementRef;
latitude;
longitude;

  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;


  constructor(
    private userservice: UserService,
    private userprof: UserProfileObjet,
    private sitterObj: SitterProfileObject,
    private auth: AuthService,
    private mapLoader:MapsAPILoader,
    private ngZone:NgZone
  ) {

  }

  ngOnInit() {
   this.userprof.fullname = this.auth.getcurrentUser().displayName;
   this.userprof.isAsitter = true;
  //  this.userprof.name =

this.mapLoader.load().then(() => {
  const autocomplete = new google.maps.places.Autocomplete(
    this.addressElementRef.nativeElement, {
      types: ['address']
    }
  );
  autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {

        // Gets place result
    let place: google.maps.places.PlaceResult;

    // Verify Result

    if (place.geometry === undefined || place.geometry === null) {
return;
    }

    this.latitude = place.geometry.location.lat();
    this.longitude = place.geometry.location.lng();

  });
  });

});

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
    this.userprof.isAserviceProvider = true;
    // this.userservice.createProfile(this.userprof, this.userprof.isAserviceProvider );
    console.log(this.userprof);
    this.step2 = false;
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
    // this.userservice.createServiceProviderProfile(this.sitterObj);
  }

  //   save(user) {
  // this.userservice.createProfile(user);
  //   }
}
