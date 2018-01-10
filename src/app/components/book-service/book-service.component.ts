import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})
export class BookServiceComponent implements OnInit {
  step1 = true;
  constructor(private userservice: UserService) { }

  ngOnInit() {
  }


  save(user) {
this.userservice.createProfile(user);

  }


}
