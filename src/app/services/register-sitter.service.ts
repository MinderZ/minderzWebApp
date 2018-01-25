import { Injectable } from '@angular/core';
import { SitterProfileObject } from '../model/sitterProfileObject.model';
import { SitterReferenceObject } from '../model/sitterReferenceObject.model';

@Injectable()
export class RegisterSitterService {

    step: number = 1;
    formName: string = 'Location';

    sitter = new SitterProfileObject;

    constructor() { this.sitter.references = new Array<SitterReferenceObject>() }


    getSitterProfileObject() {
        return this.sitter;
    }

    setSitterProfileObject(sitter) {
        this.sitter = sitter;
    }

    back() {
        this.step -= 1;
        this.changeFormName(this.step);
    }
    next() {
        this.step += 1;
        this.changeFormName(this.step);
    }

    changeFormName(step: number) {
        switch (step) {
            case 1: this.formName = 'Location';
                break;
            case 2: this.formName = 'Personal Details';
                break;
            case 3: this.formName = 'Sitter Preferences';
                break;
            case 4: this.formName = 'Sitter Details';
                break;
        }
    }
}
