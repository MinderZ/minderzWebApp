import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from "@types/googlemaps"
import { FilterService } from '../../../services/filter.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sitter-listings-filter',
  templateUrl: './sitter-listings-filter.component.html',
  styleUrls: ['./sitter-listings-filter.component.css']
})
export class SitterListingsFilterComponent implements OnInit {
  servicesProvided = ['House Sitting', 'Pet Sitting', 'Drop in Visit', 'Dog Walking']

  @ViewChild('address') public addressElementRef: ElementRef;
  latitude;
  longitude;

  serviceSearch = 'House Sitting';


  constructor(
    private mapLoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
    private filterService: FilterService) { }

  ngOnInit() {
    this.mapLoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.addressElementRef.nativeElement, {
          types: ["geocode"],
          componentRestrictions: { 'country': 'za' }
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {

          //gets place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify results
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

        });
        
      });
    });
  }

  
  search() {
    this.filterService.getbyService(this.serviceSearch);
  }
}
 