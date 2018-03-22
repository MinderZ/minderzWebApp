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

  get_AverageRating(user:string){
    return this.get_UserStars(user).map( arr =>{
       const ratings = arr.map( (res,index) => res[index].value)
       return ratings.length ?ratings.reduce((total,val)=> total +val)/ratings.length :0
     })
   }

   
}

export interface star{

  reviwedUser?:string;
  value?:number;

}
