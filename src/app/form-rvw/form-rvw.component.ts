import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-rvw',
  templateUrl: './form-rvw.component.html',
  styleUrls: ['./form-rvw.component.css']
})
export class FormRvwComponent implements OnInit {
rating:number;
  constructor() { 
    this.rating =0;
    }

  ngOnInit() {
   
  }
  setRating(rating:number):void{
    this.rating = rating;
    console.log(this.rating);
    return;
  }


}
