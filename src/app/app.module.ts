import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BookServiceComponent } from './components/book-service/book-service.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BecomeAsitterComponent } from './components/become-asitter/become-asitter.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MiniDashboardComponent } from './components/mini-dashboard/mini-dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth-service.service';


@NgModule({
  declarations: [
    AppComponent,
    BookServiceComponent,
    NavbarComponent,
    HomeComponent,
    BecomeAsitterComponent,
    FooterComponent,
    BecomeAsitterComponent,
    SignInComponent,
    MiniDashboardComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
