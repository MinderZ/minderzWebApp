import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UserPetObject } from '../model/userPetObject.modal';
import { UserProfileObjet } from '../model/userProfileObj.model';
import { SitterProfileObject } from '../model/sitterProfileObject.model';
import { AuthService } from './auth-service.service';
import { Client } from '../model/client';

@Injectable()
export class DataRecycleService {

  collectionRef = this.afs.collection("users");
  username:string;

  constructor(
    private db:   AngularFireDatabase,
    private afs: AngularFirestore,
    private pet: UserPetObject,
    private personalDetails: UserProfileObjet,
    private serviceprovider: SitterProfileObject,
    private auth: AuthService,

  ) { }


  setUsername(email:string){
    this.username = email;
  }

  // create( input, route) {
  //   return this.db.list(route).push(input);
  // }


  registerUser(client: Client) {
    this.collectionRef
      .doc(this.auth.afAuth.auth.currentUser.uid)
      .set(client)
      .then(function(docRef) {
        console.log("Client registered!");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
}
