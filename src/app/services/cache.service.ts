import { Client } from './../model/client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pet} from '../model/pet';

@Injectable()
export class CacheService {
  questionair= 1;
  myProfile = false;

  // most probably the search modal that dumps the this selected sitter
  selectedSitter: Client;
  // theres a component that dumps the current sitter details 
  currentSitter:Client;

  //ADD THIS IN CACHE SERVICE
  // private currentUser = 'Athan';
  currentUserPets : Pet

  constructor() { }

}
 