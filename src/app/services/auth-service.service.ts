import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from './cache.service';

@Injectable()
export class AuthService {
  public user$: Observable<firebase.User>;
public userUID: string;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private route: ActivatedRoute,
    private cache: CacheService

  )  {
    this.user$ = afAuth.authState;
  }

  loginWithGoogle() {
  //   const returnUrl = this.route.snapshot.queryParamMap.get(this.returnUrl) || '/';
  //  this.cache.navigator = returnUrl;
    // localStorage.setItem("returnUrl", returnUrl);
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
     this.router.navigate(['/']);
  }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

 loginWithTwitter() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }







  isLoggedIn() {
    const visitor = firebase.auth().currentUser;
    console.log(firebase.auth().currentUser);
    if (visitor === null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    //  localStorage.removeItem('token');
    this.afAuth.auth.signOut().then(res => this.router.navigate(['/']));
  }

  // what type of user for roles purposes
  getcurrentUser() {
    return firebase.auth().currentUser;
  }
  currentUserUID() {
   return this.userUID = firebase.auth().currentUser.uid;
  }

}
