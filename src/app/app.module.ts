import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth-service.service';
import { SitterReg2Component } from './components/sitter-reg-2/sitter-reg-2.component';
import { SitterReg3Component } from './components/sitter-reg-3/sitter-reg-3.component';
import { PetReg1Component } from './components/pet-reg-1/pet-reg-1.component';
import { PetReg2Component } from './components/pet-reg-2/pet-reg-2.component';


@NgModule({
  declarations: [
    AppComponent,
    BookServiceComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    // BecomeAsitterComponent,
    SignInComponent,
    MiniDashboardComponent,
    SitterReg2Component,
    SitterReg3Component,
    PetReg1Component,
    PetReg2Component,
    // ClientRegComponent,
    SitterReg1Component,
    SitterReg4Component,
SignInComponent,
MiniDashboardComponent

  ],
  imports: [
    BrowserModule,
    //  NgbModule.forRoot(),
    AppRoutingModule
  ],
  // providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
