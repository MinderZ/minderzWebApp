import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  ngOnInit() {
  }

  loginWithGoogle() {
this.auth.loginWithGoogle();
  }
  loginWithTwitter() {

  }
  loginWithFacebook() {

  }


  logout() {
this.auth.logout();
  }
}
