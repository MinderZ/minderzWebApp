import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild, ElementRef, NgZone, EventEmitter, Output } from '@angular/core';
import { } from "@types/googlemaps"
import { FilterService } from '../../../services/filter.service';


@Component({
  selector: 'app-home-page-filter',
  templateUrl: './home-page-filter.component.html',
  styleUrls: ['./home-page-filter.component.css']
})
export class HomePageFilterComponent implements OnInit {
servicesProvided=['House Sitting','Pet Sitting','Drop in Visit','Dog Walking']

  @ViewChild('address') public addressElementRef: ElementRef;
  latitude;
  longitude;

  serviceSearch='House Sitting';


  constructor(
    private mapLoader: MapsAPILoader,
     private ngZone:NgZone,
     private router:Router,
    private filterService:FilterService) { }

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
          let place: google.maps.places.PlaceResult=autocomplete.getPlace();

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
  sendParam(service: string) {
  this.filterService.serviceTerm=service
  }
  search(){
    this.sendParam(this.serviceSearch)
    this.router.navigateByUrl('/sitter-profile-listings')
  }

}
