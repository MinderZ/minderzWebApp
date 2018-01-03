import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-become-asitter',
  templateUrl: './become-asitter.component.html',
  styleUrls: ['./become-asitter.component.css']
})
export class BecomeAsitterComponent implements OnInit {
  phase1= true;
  phase2= false;
  phase3= false;
  constructor() { }

  ngOnInit() {
    // this.phase1 = true;
  }


  }

