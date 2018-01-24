import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.css']
})
export class TestimonialFormComponent implements OnInit {

    TestimonialForm:FormGroup;
  constructor(private fGroup: FormGroup) {
    this.TestimonialForm = fGroup.({
      'name': [null,Validators.required],
      'description':[,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(240)])],
      'validate': ''
    })
   }

  ngOnInit() {

  }
  
addTestimonial(post){

}
}
