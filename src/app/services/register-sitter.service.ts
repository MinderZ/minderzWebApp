import { Injectable } from '@angular/core';
import { SitterProfileObject } from '../model/sitterProfileObject.model';

@Injectable()
export class RegisterSitterService {

    sitter = new SitterProfileObject;

    constructor() { }

}
