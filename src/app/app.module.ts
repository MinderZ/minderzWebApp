import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {FormsModule}
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
// import { BookServiceComponent } from './components/book-service/book-service.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
// import { ClientRegComponent } from './components/client-reg/client-reg.component';

import { SitterReg1Component } from './components/sitter-reg-1/sitter-reg-1.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MiniDashboardComponent } from './components/mini-dashboard/mini-dashboard.component';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth-service.service';
import { CacheService } from './services/cache.service';
import { AuthGuard } from './services/auth-guard.service';
import { PetReg1Component } from './components/pet-reg-1/pet-reg-1.component';
import { UserProfileObjet } from './model/userProfileObj.model';
import { SitterProfileObject } from './model/sitterProfileObject.model';
import { UserPetObject } from './model/userPetObject.modal';
import { BookingProfileComponent } from './components/booking-profile/booking-profile.component';
import { DataRecycleService } from './services/data-recycle.service';
import { BecomeASitterComponent } from './components/become-a-sitter/become-a-sitter.component';

export const firbaseConfig = {
  apiKey: 'AIzaSyAu4jOsrSNvK-zWKatp0i_GTjoLhrFevr4',
  authDomain: 'minderz-4ecba.firebaseapp.com',
  databaseURL: 'https://minderz-4ecba.firebaseio.com',
  projectId: 'minderz-4ecba',
  storageBucket: 'minderz-4ecba.appspot.com',
  messagingSenderId: '319003344942'
};

@NgModule({
  declarations: [
    AppComponent,
    BecomeASitterComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    // BecomeAsitterComponent,
    PetReg1Component,
    // ClientRegComponent,
    SitterReg1Component,
    SignInComponent,
    MiniDashboardComponent,
    BookingProfileComponent
  ],
  imports: [
    BrowserModule,
    CustomFormsModule,
    //  NgbModule.forRoot(),
    AngularFireModule.initializeApp(firbaseConfig),
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AngularFireDatabaseModule,
    AngularFireDatabase,
    AngularFireAuth,
    UserService,
    AuthService,
    CacheService,
    AuthGuard,
    DataRecycleService,
    UserProfileObjet,
    SitterProfileObject,
    UserPetObject
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
