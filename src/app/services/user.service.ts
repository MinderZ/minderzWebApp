import { Injectable } from '@angular/core';
import { AuthService } from './auth-service.service';
import { DataRecycleService } from './data-recycle.service';

@Injectable()
export class UserService {
serviceProviderRoute = 'users/' + 'serviceProviders/' + this.auth.currentUserUID() + '/personalDetails';
serviceProvitionInforRoute = 'users/' + 'serviceProviders/' + this.auth.currentUserUID() + '/serviceProvitionInfor';
serviceProviderPetsRoute = 'users/' + 'serviceProviders/' + this.auth.currentUserUID() + '/serviceProviderPets';
clientRoute = 'users/' + 'clients' + this.auth.currentUserUID() + '/personalDetails';


constructor(
private recycle: DataRecycleService,
private auth: AuthService,
) {}

// create user profile
createProfile(profile, userType) {
if (userType) {
  this.recycle.create(profile, this.serviceProviderRoute);
} else {
  this.recycle.create(profile, this.clientRoute);
}

}

// create service provider preferences profile from the above personal data
createServiceProviderProfile(sitter) {
this.recycle.create(sitter, this.serviceProvitionInforRoute);
}

// create service provider pets into the above profile
createServiceProviderPets(pet) {
  this.recycle.create(pet, this.serviceProviderPetsRoute);
}



getProfile() {

}

}

