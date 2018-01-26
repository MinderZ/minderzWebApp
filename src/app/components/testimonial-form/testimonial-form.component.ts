import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { ReviewTestimonialService } from '../../services/review-testimonial.service';
import { CacheService } from '../../services/cache.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.css']
})
export class TestimonialFormComponent implements OnInit {

    private TestimonialForm:FormGroup;
    private message:string='';

  constructor(
    private fBuilder: FormBuilder,
    private TestimonialServ:ReviewTestimonialService,
    private cacheService:CacheService,
    private route:Router,
    private location:Location
  ) {
   
    this.TestimonialForm = fBuilder.group({
      'description':[null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(240)])]
    })
   }

  ngOnInit() {
    // this.TestimonialServ.get_User_reviews('1').subscribe(data =>{
    //   console.log(data)
    // })
  }

addTestimonial(post){
  console.log(post)
  if(this.TestimonialForm.valid){
    this.message= 'Testimonial Sent'
  }
 
  //const current user =this.cacheService.currentUser
  setTimeout(() => {
   // this.TestimonialServ.create_Testimonial(' ',post.description)
    this.location.subscribe(data =>{
      console.log(data.url)
    })
    // })back()
  }, 1000);
 
}
}
