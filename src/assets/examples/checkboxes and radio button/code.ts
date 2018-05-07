import { Component } from '@angular/core';
import { CacheService } from '../../../app/services/cache.service';
import { Client } from '../../../app/model/client';

@Component({
    selector: 'app-code',
    templateUrl: './code.html',
    styleUrls: ['./code.css']
})
export class CodeComponent {
    checked = true;
    selected = true;
    rating = 3.5;
myProfile: Client;
    constructor(
         private cache : CacheService
        ){
            this.myProfile = this.cache.currentSitter

        if (this.cache.myProfile) {
            
        } else {
            this.myProfile = this.cache.selectedSitter;
        }
        }

    check() {
        this.checked = !this.checked;
    }

    select() {
        this.selected = !this.selected;
    }

}
