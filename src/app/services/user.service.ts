import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {

  constructor(private db:   AngularFireDatabase) { }


create(user) {
return this.db.list('/users').push(user);

}


}
