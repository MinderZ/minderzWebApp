import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from './cache.service';
import { NotificationService } from './notification.service';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';
import { UserProfileObjet } from '../model/userProfileObj.model';
// import { User } from 'app/model/user.model';


@Injectable()
export class AuthService implements OnInit {
  public user$: Observable<firebase.User>;
  public userUID: string;

  returnUrl?: string;
User = {
  uid: '',
  email: '',
  photoURL: '',
  displayName: '',
  isAserviceProvider : true
 };
 firestoreUsersRef: any;

 ngOnInit() {

}
  
constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private cache: CacheService,
    private notify: NotificationService
  ) {
    this.user$ = afAuth.authState;
    this.firestoreUsersRef = this.afs.collection('users').valueChanges();
  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (this.checkUserExistance()) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    this.router.navigateByUrl(this.returnUrl);

        } else {
               this.initialiseAUser();
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    this.router.navigateByUrl(this.returnUrl);

        }
      })
      .catch(error => {
        if (error.message === 'The email address is already in use by another account.') {
            alert(error.message);
        } else {
            console.log(error.message);
        }
    });
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (this.checkUserExistance()) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    this.router.navigateByUrl(this.returnUrl);

   } else {
          this.initialiseAUser();
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
          this.router.navigateByUrl(this.returnUrl);

   }
      })
      .catch(error => this.handleError(error));
  }

  loginWithGoogle() {
      this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        if (this.checkUserExistance()) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    this.router.navigateByUrl(this.returnUrl);

   } else {
          this.initialiseAUser();
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    this.router.navigateByUrl(this.returnUrl);
   }
      });
  }

  loginWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(() => {
        if (this.checkUserExistance()) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    this.router.navigateByUrl(this.returnUrl);

   } else {
          this.initialiseAUser();
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    this.router.navigateByUrl(this.returnUrl);
       }
      });
  }

  loginWithTwitter() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then(() => {
        if (this.checkUserExistance()) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    this.router.navigateByUrl(this.returnUrl);

   } else {
          this.initialiseAUser();
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    this.router.navigateByUrl(this.returnUrl);
   }
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
    this.afAuth.auth.signOut().then(res => this.router.navigate(['/']));
  }

  getcurrentUser() {
    return firebase.auth().currentUser;
  }

  currentUserUID() {
    
    return (this.userUID = firebase.auth().currentUser.uid);
  }
  checkUserExistance() {
    this.firestoreUsersRef.forEach(element => {
      let flag: Boolean;
      for (let i = 0; i < element.length; i++) {
          if (element[i].user === this.afAuth.auth.currentUser.uid) {
               flag = false;
              break;
          }
      }
      if (flag === undefined) {
        return false;
      } else {
        return true;
      }
  });
  }

  initialiseAUser() {
      const userProfile = this.afs.collection('users').doc('' + this.currentUserUID());
    this.User.uid =   this.currentUserUID();
    this.User.displayName =   this.getcurrentUser().displayName;
     return userProfile.set(this.User);
 }

}
