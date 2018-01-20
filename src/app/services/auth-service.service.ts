import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from './cache.service';
import { NotificationService } from './notification.service';

interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}



@Injectable()
export class AuthService {
  public user$: Observable<User>;
public userUID: string;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private route: ActivatedRoute,
    private cache: CacheService,
    private notify: NotificationService

  )  {
    this.user$ = afAuth.authState;
  }


  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.notify.update('Welcome to MinderZ!!!', 'success');
        return this.updateUserinfor(user);
      })
      .catch((error) => this.handleError(error));
  }



  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.notify.update('Welcome to MinderZ!!!', 'success');
        return this.updateUserinfor(user);
      })
      .catch((error) => this.handleError(error) );
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




 // If any error, console log and notifying the user of such
 private handleError(error: Error) {
  console.error(error);
  this.notify.update(error.message, 'error');
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


    // Sets user data to realtime after succesful login
    private updateUserinfor(user: User) {

      const userRef = firebase.auth().currentUser;

      userRef.updateProfile({
        displayName: user.displayName || 'nameless user',
        photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ',
      });

    }
}
