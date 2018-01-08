import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import {FormsModule}
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';
import { BookServiceComponent } from './components/book-service/book-service.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
// import { ClientRegComponent } from './components/client-reg/client-reg.component';

import { SitterReg1Component } from './components/sitter-reg-1/sitter-reg-1.component';
import { SitterReg4Component } from './components/sitter-reg-4/sitter-reg-4.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MiniDashboardComponent } from './components/mini-dashboard/mini-dashboard.component';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {UserService} from './services/user.service';

export const	firbaseConfig = {
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
    BookServiceComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    // ClientRegComponent,
    SitterReg1Component,
    SitterReg4Component,
SignInComponent,
MiniDashboardComponent

  ],
  imports: [
    BrowserModule,
    //  NgbModule.forRoot(),
    AngularFireModule.initializeApp(firbaseConfig),
    FormsModule,
    AppRoutingModule
  ],
  providers: [

    AngularFireDatabaseModule, AngularFireDatabase
    , AngularFireAuth,
     UserService
  ],
  // providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
