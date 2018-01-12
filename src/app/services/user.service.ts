import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth-service.service';

@Injectable()
export class UserService{

  constructor(
    private db:   AngularFireDatabase,
private auth: AuthService) {
   }


createProfile(user) {
console.log("user uid: " + this.auth.currentUserUID());
return this.db.list('users/'+this.auth.currentUserUID() +'/profile').push(user);
// console.log("not logged in, thus not saved"+ firebase.auth().currentUser.uid );
}


createPetProfile(user) {
return this.db.list('/users/${this.userId}/pets').push(user);
}
createSitterProfile(user) {
return this.db.list('/users/${this.userId}/sitter').push(user);
}

getProfile() {

}

}

// getMessage(): AngularFireList<ChatMessage[]> {
//     return this.fireDb.list('/messages');
//   }
