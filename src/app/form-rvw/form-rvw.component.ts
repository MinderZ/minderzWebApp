import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-rvw',
  templateUrl: './form-rvw.component.html',
  styleUrls: ['./form-rvw.component.css']
})
export class FormRvwComponent implements OnInit {
  myForm: any;
  rating: number;
  constructor() { 
    this.rating =0;
    }

    onSubmit() {
      if (this.myForm.valid) {  
        console.log("Form Submitted!");
        // This resets the form back to it's initial state  
        this.myForm.reset();
      }
    }

  ngOnInit() {
   
  }
  setRating(rating:number):void{
    this.rating = rating;
    console.log(this.rating);
    return;
  }


}
