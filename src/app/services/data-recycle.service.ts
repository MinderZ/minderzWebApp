import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { UserPetObject } from '../model/userPetObject.modal';
import { UserProfileObjet } from '../model/userProfileObj.model';
import { SitterProfileObject } from '../model/sitterProfileObject.model';
import { AuthService } from './auth-service.service';
import { Client } from '../model/client';
import 'rxjs/add/operator/map';

@Injectable()
export class DataRecycleService {

  client: Client;
  collectionRef = this.afs.collection("users");
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

  create(input, route) {
    return this.db.list(route).push(input);
  }


  registerUser(client: Client) {
    this.client = client;
    this.collectionRef
      .doc(this.auth.afAuth.auth.currentUser.uid)
      .set(Object.assign({}, client))
      .then(function (docRef) {
        console.log("Client registered!");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  getCurrentUser() {
    return this.collectionRef.doc(this.auth.afAuth.auth.currentUser.uid).valueChanges();
  }

  //this.afs.collection('users', ref => ref.where('isServiceProvider', '==', true))
  getData(collection: string, variable: string, operator: any, value: any) {
    return this.afs.collection(collection, ref => ref.where(variable, operator, value))
      .valueChanges().map(response => {
        // console.log(response);
        return response;
      });
  }
}
