import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { ReviewTestimonialService } from '../../services/review-testimonial.service';
import { RatingServiceService } from '../../services/rating-service.service';
import { print } from 'util';

@Component({
  selector: 'app-form-rvw',
  templateUrl: './form-rvw.component.html',
  styleUrls: ['./form-rvw.component.css']
})
export class FormRvwComponent implements OnInit {
  myForm: any;
  rating: number;
  reviewForm: FormGroup;
  view:boolean=true;
  constructor(
    private fb: FormBuilder,
    private afAuth: AuthService,
    private reviewService: ReviewTestimonialService,
    private ratingServ: RatingServiceService) {
    this.reviewForm = fb.group({
      'review': [null, Validators.compose([Validators.required, Validators.maxLength(120)])],
      'star': [null, Validators.required]
    })


  }




  ngOnInit() {
    this.ratingServ.get_AverageRating("Richard")
  }

  addReview(post) {
    console.log(post)
    setTimeout(() => {
      this.reviewService.create_review(this.afAuth.currentUserUID(), "Richard", post.review, post.star)
      this.view =false;
    }, 1500);
    this.reviewForm.reset()
  }

}
