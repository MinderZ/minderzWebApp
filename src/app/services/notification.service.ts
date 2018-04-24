import { Injectable } from '@angular/core';


import { Subject } from 'rxjs/Subject';

/// Notify users about errors and other helpful stuff
export interface Msg {
  content: string;
  style: string;
}


@Injectable()
export class NotificationService {
flag: boolean;
 msg: Msg;
  // private _msgSource = new Subject<Msg | null>();

  // msg = this._msgSource.asObservable();

  update(content: string, style: 'error' | 'info' | 'success') {
   this.msg = { content, style };
this.flag = true;
    
  }

  clear() {
this.flag = false;
  }
}
