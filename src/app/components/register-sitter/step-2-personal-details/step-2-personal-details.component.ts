import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-step-2-personal-details',
  templateUrl: './step-2-personal-details.component.html',
  styleUrls: ['./step-2-personal-details.component.css']
})
export class Step2PersonalDetailsComponent implements OnInit {

  form: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
