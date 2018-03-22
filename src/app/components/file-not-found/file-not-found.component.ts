import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
// ocation

@Component({
  selector: 'app-file-not-found',
  templateUrl: './file-not-found.component.html',
  styleUrls: ['./file-not-found.component.css']
})
export class FileNotFoundComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back() {
this.location.back();
}
}
