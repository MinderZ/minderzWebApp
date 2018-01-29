import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { RegisterSitterService } from '../../../services/register-sitter.service';
import { ValidationService } from '../../../services/validation.service';

@Component({
  selector: 'app-step-1-location',
  templateUrl: './step-1-location.component.html',
  styleUrls: ['./step-1-location.component.css',
    '../register-sitter.component.css']
})
export class Step1LocationComponent implements OnInit {

  isValid: boolean;
  location: string = this.registerService.sitter.location;

  @ViewChild('googleAddress') public addressElementRef: ElementRef;
  locationForm: FormGroup;
  latitude;
  longitude;

  constructor(
    private mapLoader: MapsAPILoader,
    private ngZone: NgZone,
    fb: FormBuilder,
    validationService: ValidationService,
    protected registerService: RegisterSitterService) {
    this.locationForm = fb.group({
      address: ["", Validators.required]
    })
  }

  get address() {
    return this.locationForm.get("address");
  }

  ngOnInit() {
    this.mapLoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.addressElementRef.nativeElement, {
          types: ["address"],
          componentRestrictions: { 'country': 'za' }
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult=autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.location = place.formatted_address;

        });
      });
    });
  }


  next(){
    this.registerService.sitter.location = this.location;
    this.registerService.sitter.coordinates = {
      lat: this.latitude,
      lng: this.longitude
    }
    
    this.registerService.next()
  }
}
