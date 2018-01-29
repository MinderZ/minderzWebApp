import { Component, OnInit } from '@angular/core';
import { ReviewTestimonialService } from '../../services/review-testimonial.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private testimonials:any[];
  constructor(private TestimonialServ: ReviewTestimonialService,private auth:AuthService) { 
     this.TestimonialServ.get_Testimonials().subscribe( data =>{
    console.log(data);
    this.testimonials = data;
    console.log(this.auth.getcurrentUser())
    console.log(this.auth.currentUserUID())
  })}

  ngOnInit() {
   
   
  }





}
