import { ReviewTestimonialService } from './../../services/review-testimonial.service';
import { DataRecycleService } from './../../services/data-recycle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {

  reviews:any;
  constructor(
    private dataRecycle:DataRecycleService,
    private reviewService:ReviewTestimonialService) { 

  
    }

  ngOnInit() {
    this.reviewService.get_User_reviews("Richard").subscribe(res =>{
    console.log(res)
      this.reviews = res;
    
    })
  }

 

}
