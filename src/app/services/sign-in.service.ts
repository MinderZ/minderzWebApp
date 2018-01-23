import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http/src/http";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()
export class SignInService {

    //users = new Array;
    user: any;
    firestoreDBRef: any;
    initialized: boolean;

    constructor(private fsDB: AngularFirestore, private fsAuth: AngularFireAuth) {
        this.firestoreDBRef = this.fsDB.collection("/User data").valueChanges();
    }

    NgOninit() {

    }

    signIn(email, password) {
        // Check if the user enter a Gmail email and open the google popup if needed
        if (email.includes('@gmail.com')) {
            this.googlePopup();
        } else {
            // Once signed in successfully initialise the user data and go to the dashboard
            this.fsAuth.auth.signInWithEmailAndPassword(email, password).then(
                (success) => {
                    // this.initializeData();
                    // this.router.navigate(['/main/dashboard']);
                }).catch(
                (err) => {
                    alert('Error: ' + err.message);
                });
        }
    }

    googlePopup() {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        // this.userRewards = this.userRewardsRef.snapshotChanges().map(changes => {
        //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        // });
        this.fsAuth.auth.signInWithPopup(provider).then(
            (success) => {
                this.firestoreDBRef.forEach(element => {
                    // Determine if a new user is registering and create a new entry in the database or go to the dashboard
                    let flag: Boolean;
                    for (let i = 0; i < element.length; i++) {
                        if (element[i].user === this.fsAuth.auth.currentUser.uid) {
                            // this.theme = element[i].theme;
                            flag = false;
                            break;
                        }
                    }
                    // New user
                    if (flag === undefined) {
                        this.pushToUserTable(this.fsAuth.auth.currentUser.uid);
                    } else { // Existing user
                        // this.initializeData();
                        // this.router.navigate(['/main/dashboard']);
                    }
                });
            }).catch(
            (err) => {
                console.log(err.message);
            });
    }

    signUp(email, password, username) {
        this.fsAuth.auth.createUserWithEmailAndPassword(email, password).then(
            (success) => {
                this.fsAuth.auth.currentUser.updateProfile({ displayName: username, photoURL: null }); //Add basic profile pic url
                this.pushToUserTable(this.fsAuth.auth.currentUser.uid);
            }).catch(
            (err) => {
                if (err.message === 'The email address is already in use by another account.') {
                    alert(err.message);
                } else {
                    console.log(err.message);
                }
            });
    }

    pushToUserTable(uid: any) {
        this.firestoreDBRef.push({
            user: uid
        });
        // Initialise the new user's data
        // this.initializeData();
        // const user = this.firestoreDBRef.snapshotChanges().map(changes => {
        //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        // });
        // let flag = true;
        // user.forEach(element => {
        //     if (flag) {
        //         for (let i = 0; i < element.length; i++) {
        //             if (element[i].user === this.getUID()) {
        //                 flag = false;
        //                 this.router.navigate(['/main/rewards']);
        //                 break;
        //             }
        //         }
        //     }
        // });
    }

    initializeData() {
        this.initialized = true;
        //this.photoUrl = this.afAuth.auth.currentUser.photoURL;
        const user = this.firestoreDBRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });

        user.subscribe(res => {
            res.map(response => {
                if (response.user === this.fsAuth.auth.currentUser.uid) {
                    //this.theme = response.theme;
                    //this.ts.setTheme(response.theme);
                }
            });
        });
    }

    checkRating(rating) {
        const user = this.firestoreDBRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });

        let qualifyingUsers;

        user.subscribe(res => {
            res.map(element => {
                if(element.rating >= rating) {
                    qualifyingUsers.push(element);
                }
            });
        });
    }

}