import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { UserPetObject } from '../model/userPetObject.modal';
import { UserProfileObjet } from '../model/userProfileObj.model';
import { SitterProfileObject } from '../model/sitterProfileObject.model';
import { AuthService } from './auth-service.service';
import { Client } from '../model/client';
import { Pet} from '../model/pet';
import 'rxjs/add/operator/map';

@Injectable()
export class DataRecycleService {
  userPet:Pet
  client: Client;
  userCollectionRef = this.afs.collection("users");
  petCollectionRef = this.afs.collection("pets");
  username: string;

  users: Array<Client>;

  constructor(
    private db: AngularFireDatabase,
    private afs: AngularFirestore,
    private pet: UserPetObject,
    private personalDetails: UserProfileObjet,
    private serviceprovider: SitterProfileObject,
    private auth: AuthService,
  ) { }


  setUsername(email: string) {
    this.username = email;
  }
 


  registerUser(client: Client) {
    this.client = client;
    this.userCollectionRef
      .doc(this.auth.afAuth.auth.currentUser.uid)
      .set(Object.assign({}, client))
      .then(function (docRef) {
               console.log("Client registered!");
              })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

 registerPet(pett: Pet) {
    this.userPet = pett;
    this.petCollectionRef
      .doc(this.auth.afAuth.auth.currentUser.uid)
      .set(Object.assign({}, pett))
      .then(function (docRef) {
               console.log("pet registered!");
              })
      .catch(function (error) {
        console.error("Error adding pet: ", error);
      });
  }


  getCurrentUser() {
    return this.userCollectionRef.doc(this.auth.afAuth.auth.currentUser.uid).valueChanges();
  }

  getUserPets() {
    return this.petCollectionRef.doc(this.auth.afAuth.auth.currentUser.uid).valueChanges();
  }


  // deleteUserPets() {
  //   return this.petCollectionRef.doc(this.auth.afAuth.auth.currentUser.uid).delete();
  // }

  // deleteUser() {
  //   return this.petCollectionRef.doc(this.auth.afAuth.auth.currentUser.uid).delete();
  // }




// deleteAlliAccount(){
//   // shoud warn user that theres no turning back from this action all data loss is not reversable
//  const storageRef = this.auth.afAuth.firebase.storage().ref();
// const ID_copy = storageRef.child('Copy-of-IDs/'+this.auth.afAuth.auth.currentUser.uid);
// const ProfilePictures = storageRef.child('Profile-pics/'+this.auth.afAuth.auth.currentUser.uid);
// const consentForms = storageRef.child('Consent-forms/'+this.auth.afAuth.auth.currentUser.uid);

// // Delete the Id copies
// ID_copy.delete().then(function() {
//     console.log("File deleted successfully from the Storage!");
//  }).catch(function(error) {
//     console.error("Uh-oh, an error occurred ID Copy!", error);
// });


// // delete profile picture
// ProfilePictures.delete().then(function() {
//     console.log("File deleted successfully from the Storage!");
//  }).catch(function(error) {
//     console.error("Uh-oh, an error occurred deleting Profile Picture", error);
// });
//  // delete consent forms
// consentForms.delete().then(function() {
//     console.log("File deleted successfully from the Storage!");
//  }).catch(function(error) {
//     console.error("Uh-oh, an error occurred deleting Consent form!", error);
// });


// // delete all user ref to the database
//   this.deleteUser().then(function() {
//     console.log("User successfully deleted from the Database!");
// }).catch(function(error) {
//     console.error("Error deleting User: ", error);
// });
// // delete all pets ref to the database
// this.deleteUserPets().then(function() {
//     console.log("Pet successfully deleted from the Database!");
// }).catch(function(error) {
//     console.error("Error deleting User: ", error);
// });


// // delete the auth user
//     const user = this.auth.firebase.auth().currentUser;
// user.delete().then(function() {
//   this.router.navigate(['/']);
// }).catch(function(error) {
//     console.error("Error deleting Authenticated User: ", error);
// });

// }










  //this.afs.collection('users', ref => ref.where('isServiceProvider', '==', true))
  getData(collection: string, variable: string, operator: any, value: any) {
    return this.afs.collection(collection, ref => ref.where(variable, operator, value))
      .valueChanges().map(response => {
        // console.log(response);
        return response;
      });
  }
}
