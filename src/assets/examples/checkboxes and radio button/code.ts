import { Component } from '@angular/core';

@Component({
    selector: 'app-code',
    templateUrl: './code.html',
    styleUrls: ['./code.css']
})
export class CodeComponent {
    checked = true;
    selected = true;
    rating = 3.5;

    constructor(){}

    check() {
        this.checked = !this.checked;
    }

    select() {
        this.selected = !this.selected;
    }

}
