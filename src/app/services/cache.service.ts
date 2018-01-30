import { Client } from './../model/client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CacheService {
public navigator = '';
selectedSitter:Client;
currentSitter: Client;

//ADD THIS IN CACHE SERVICE
private currentUser='Athandile';
  constructor() { }

}
