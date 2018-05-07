import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
// import { DataRecycleService } from './data-recycle.service';
import { CacheService } from './cache.service';
import { NotificationService } from './notification.service';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';
import { UserProfileObjet } from '../model/userProfileObj.model';
import { RegisterService } from './register.service';
// import { User } from 'app/model/user.model';
 

@Injectable()
export class AuthService implements OnInit {
  public user$: Observable<firebase.User>;
  public userUID: string;

  returnUrl?: string;
// User = {
//   uid: '',
//   email: '',
//   photoURL: '',
//   displayName: '',
//   isAserviceProvider : true
//  };
 firestoreUsersRef: any;

 ngOnInit() {

}

constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private cache: CacheService,
    // private dataRecycleService: DataRecycleService,
    private notify: NotificationService,
    private registerService: RegisterService,
  ) {
    this.user$ = afAuth.authState;
    this.firestoreUsersRef = this.afs.collection('users').valueChanges();
  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(success => {
        this.cache.myProfile = true;
        this.router.navigate(['/registration']);
      })
      .catch(error => this.handleError(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.notify.update('Welcome to Minderz!!!', 'success');        
        this.cache.myProfile = true;
        this.router.navigate(['/home']);
        this.registerService.step = 3;
      })
      .catch(error => this.handleError(error));
  }

  loginWithGoogle() {
      this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.router.navigate(['/home']);
       })
      .catch(error => this.handleError(error));
   
  }

  loginWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => this.handleError(error));
  }

  loginWithTwitter() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => this.handleError(error));
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
    this.afAuth.auth.signOut().then(res => this.router.navigate(['/']));
  }

  getcurrentUser() {
    return firebase.auth().currentUser;
  }

  currentUserUID() {
    return this.userUID = firebase.auth().currentUser.uid;
  }





}
