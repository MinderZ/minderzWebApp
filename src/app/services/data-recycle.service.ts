import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UserPetObject } from '../model/userPetObject.modal';
import { UserProfileObjet } from '../model/userProfileObj.model';
import { SitterProfileObject } from '../model/sitterProfileObject.model';
import { AuthService } from './auth-service.service';

@Injectable()
export class DataRecycleService {

  constructor(
    private db:   AngularFireDatabase,
    private afs: AngularFirestore,
    private pet: UserPetObject,
    private personalDetails: UserProfileObjet,
    private serviceprovider: SitterProfileObject,
    private auth: AuthService,

  ) { }



create( input, route) {
  return this.db.list(route).push(input);
}



}
