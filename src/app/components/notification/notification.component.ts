import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
// msg;
  constructor(
   private notify: NotificationService
  ) { 
    // tis.msg = this.notify.
  }

  ngOnInit() {
  }

}
