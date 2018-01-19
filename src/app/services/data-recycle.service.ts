import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DataRecycleService {

  constructor(
    private db:   AngularFireDatabase,
  ) { }


create( input, route) {
return this.db.list(route).push(input);
}

}
