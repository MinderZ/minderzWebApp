import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { } from "@types/googlemaps"

@Component({
  selector: 'app-home-page-filter',
  templateUrl: './home-page-filter.component.html',
  styleUrls: ['./home-page-filter.component.css']
})
export class HomePageFilterComponent implements OnInit {

  @ViewChild('address') public addressElementRef: ElementRef;
  latitude;
  longitude;

  constructor(private mapLoader: MapsAPILoader, private ngZone:NgZone,private router:Router) { }

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
          let place: google.maps.places.PlaceResult;

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

  search(){
    this.router.navigateByUrl('/sitter-profile-listings')
  }

}
