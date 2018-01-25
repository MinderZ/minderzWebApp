import { Injectable } from '@angular/core';
import { SitterProfileObject } from '../model/sitterProfileObject.model';
import { SitterReferenceObject } from '../model/sitterReferenceObject.model';

@Injectable()
export class RegisterSitterService {

    sitter = new SitterProfileObject;

    constructor() { this.sitter.references = new Array<SitterReferenceObject>() }


    getSitterProfileObject() {
        return this.sitter;
    }

    setSitterProfileObject(sitter) {
        this.sitter = sitter;
    }
}
