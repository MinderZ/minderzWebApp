import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth-service.service';

@Injectable()
export class UserService {

  constructor(
    private db:   AngularFireDatabase,
private auth: AuthService) {
   }

// create user profile
createProfile(profile) {
return this.db.list('users/' + this.auth.currentUserUID() + '/profile').push(profile);
}
// create sitter profile from the user profile above
createSitterProfile(sitter) {
return this.db.list('/users/' + this.auth.currentUserUID() + '/sitter').push(sitter);
}

createPetProfile(pet) {
return this.db.list('/users/' + this.auth.currentUserUID() + '/pets').push(pet);
}

getProfile() {
}

}

