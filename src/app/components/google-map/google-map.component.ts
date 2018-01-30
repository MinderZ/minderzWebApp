import { Client } from './../../model/client';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() locations:Client[];

  constructor() { }

  ngOnInit() {
  }

}

// export interface Locations{
//   name:string;
//   price:number;
//   lat:number;
//   lng:number;
// }