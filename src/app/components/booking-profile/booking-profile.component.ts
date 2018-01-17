import { Component } from '@angular/core';

@Component({
    selector: 'app-booking-profile',
    templateUrl: './booking-profile.component.html',
    styleUrls: ['./booking-profile.component.css']
})

export class BookingProfileComponent {

    rating: number;

    constructor() {
        this.rating = 4;
    }
}