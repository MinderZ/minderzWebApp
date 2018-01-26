import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore'
@Injectable()
export class RatingServiceService {

  
  constructor(private afs: AngularFirestore) { }

  get_UserStars(uID){
    const ref = this.afs.collection('/stars', ref => ref.where('uID','==',uID))
    return ref.valueChanges();
  }

  setStarRating(reviwedUser,value){
    const rating:star={reviwedUser:reviwedUser,value:value}
    const path= `/stars/${this.afs.createId()}`
    return this.afs.doc(path).set(rating)    
  }
}

export interface star{
  
  reviwedUser?:string;
  value?:number;

}