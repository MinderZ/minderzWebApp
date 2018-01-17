import { Injectable } from '@angular/core';
import { AuthService } from './auth-service.service';
import { DataRecycleService } from './data-recycle.service';

@Injectable()
export class UserService {
profileroute = '/users/' + this.auth.currentUserUID() + '/profile';
petroute = '/users/' + this.auth.currentUserUID() + '/pets';
sitteroute = '/users/' + this.auth.currentUserUID() + '/profile';

constructor(
private recycle: DataRecycleService,
private auth: AuthService,
) {}

// create user profile
createProfile(profile) {
this.recycle.create(profile, this.profileroute);
}

// create sitter profile from the user profile above
createSitterProfile(sitter) {
this.recycle.create(sitter, this.sitteroute);
}

createPetProfile(pet) {
  this.recycle.create(pet, this.petroute);
}



getProfile() {
}

}

