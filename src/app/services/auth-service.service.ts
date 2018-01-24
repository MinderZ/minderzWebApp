import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from './cache.service';
import { NotificationService } from './notification.service';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';
import { UserProfileObjet } from '../model/userProfileObj.model';
import { User } from 'app/model/user.model';


@Injectable()
export class AuthService {
  public user$: Observable<firebase.User>;
  public userUID: string;
User = {
  uid: '',
  email: '',
  photoURL: '',
  displayName: '',
  isAserviceProvider : true
 };

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private cache: CacheService,
    private notify: NotificationService
  ) {
    this.user$ = afAuth.authState;
  }

  emailSignUp(email: string, password: string) {
console.log('email');
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.notify.update('Welcome to MinderZ!!!', 'success');
        this.initialiseAUser();
        this.router.navigate(['/']);
      })
      .catch(error => this.handleError(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.notify.update('Welcome to MinderZ!!!', 'success');
        // return this.updateUserinfor(user);
        this.router.navigate(['/']);
      })
      .catch(error => this.handleError(error));
  }

  loginWithGoogle() {
      this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.initialiseAUser();
        this.router.navigate(['/']);
      });
  }

  loginWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(() => {
        this.initialiseAUser();
        this.router.navigate(['/']);
      });
  }

  loginWithTwitter() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then(() => {
        this.initialiseAUser();
        this.router.navigate(['/']);
      });
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

  getcurrentUser() {
    return firebase.auth().currentUser;
  }

  currentUserUID() {
    return (this.userUID = firebase.auth().currentUser.uid);
  }

  initialiseAUser() {
      const userProfile = this.afs.collection('users').doc('clients');
    this.User.uid =   this.currentUserUID();
     return userProfile.set(this.User);
 }

}
