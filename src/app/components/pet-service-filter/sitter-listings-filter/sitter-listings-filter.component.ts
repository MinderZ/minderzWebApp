import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from "@types/googlemaps"
@Component({
  selector: 'app-sitter-listings-filter',
  templateUrl: './sitter-listings-filter.component.html',
  styleUrls: ['./sitter-listings-filter.component.css']
})
export class SitterListingsFilterComponent implements OnInit {

  @ViewChild('address') public addressElementRef: ElementRef;
  latitude;
  longitude;

  constructor(private mapLoader: MapsAPILoader,
    private ngZone: NgZone) { }

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

          //Gets place result
          let place: google.maps.places.PlaceResult

          //Verify Result

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat()
          this.longitude = place.geometry.location.lng()

        });
      });

    });
  }

}
