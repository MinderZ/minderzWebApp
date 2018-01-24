import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.css']
})
export class RegisterSitterComponent implements OnInit {

  step:number=1;

  constructor() { }

  ngOnInit() {
  }

  back(){
    this.step-=1;
  }
  next(){
    this.step+=1;
  }

}
