import { Injectable } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import { RatingServiceService } from './rating-service.service';

export interface Testimonial{  
  uid:string;
  description:string;
}
export interface Review{  
  userId:string;
  reviewdUser:string;
  description:string;
}

@Injectable()
export class ReviewTestimonialService {

  
  
  constructor(
    private afs:AngularFirestore,
    private starService:RatingServiceService
  ) { }


  create_Testimonial(uid , description){
    const testimonial:Testimonial= {uid:uid,description:description }
    
    const Path= `testimonials/${this.afs.createId()}`

    return this.afs.doc(Path).set(testimonial)
  }


  get_Testimonials(){
    return this.afs.collection('testimonials').valueChanges();
  }

  create_review(currentUser,reviwedUser,description,value){

    const review:Review={userId:currentUser,reviewdUser:reviwedUser,description}

    const path= `reviews/${this.afs.createId()}`
      
    this.starService.setStarRating(reviwedUser,value)
    return this.afs.doc(path).set(review)
  }


  get_User_reviews(userId){
    return this.afs.collection('reviews', ref => ref.where('userId' ,'==' , userId)).valueChanges()
  }




}
