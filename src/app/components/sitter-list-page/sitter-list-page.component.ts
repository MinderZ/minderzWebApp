import { Component, OnInit } from '@angular/core';
import { Locations } from '../google-map/google-map.component';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-sitter-list-page',
  templateUrl: './sitter-list-page.component.html',
  styleUrls: ['./sitter-list-page.component.css']
})
export class SitterListPageComponent implements OnInit {
  value;

  mock: Locations[] = [
    { name: "Piet", lat: -33.92268, lng: 18.411589999999933, price: 300 },
    { name: "Jannie", lat: -33.92868, lng: 18.411589999999933, price: 300 },
    { name: "Sannie", lat: -33.92568, lng: 18.411589999999933, price: 300 },
    { name: "Koos", lat: -33.92868, lng: 18.411889999999933, price: 300 },
    { name: "Frikkie", lat: -33.92868, lng: 18.411189999999933, price: 300 }
  ]

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getbyService(this.filter.serviceTerm)
  }

}
