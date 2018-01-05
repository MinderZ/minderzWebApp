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


@NgModule({
  declarations: [
    AppComponent,
    BookServiceComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    // ClientRegComponent,
    SitterReg1Component,
    SitterReg4Component
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
