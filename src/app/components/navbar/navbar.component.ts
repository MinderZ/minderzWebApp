import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { DataRecycleService } from '../../services/data-recycle.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router,
    public auth: AuthService,
    private dataRecycleService: DataRecycleService,
  ) {}

  ngOnInit(){
    
  }

  logout() {
    this.auth.logout();
  }


  becomeASitter(){
    this.dataRecycleService.getUsers();
    // this.router.navigate(['registration']);
  }
}
