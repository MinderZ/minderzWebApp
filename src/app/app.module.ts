import { AgmCoreModule } from "@agm/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup } from "@angular/forms";
// import {FormsModule}
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from "angularfire2";
import { CustomFormsModule } from "ng2-validation";

import { AppComponent } from "./app.component";
// import { BookServiceComponent } from './components/book-service/book-service.component';
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
// import { ClientRegComponent } from './components/client-reg/client-reg.component';

import { SignInComponent } from "./components/sign-in/sign-in.component";
import { MiniDashboardComponent } from "./components/mini-dashboard/mini-dashboard.component";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from "angularfire2/database";
import { AngularFireAuth, AngularFireAuthModule } from "angularfire2/auth";

import { UserService } from "./services/user.service";
import { AuthService } from "./services/auth-service.service";
import { CacheService } from "./services/cache.service";
import { AuthGuard } from "./services/auth-guard.service";
import { PetReg1Component } from "./components/pet-reg-1/pet-reg-1.component";
import { UserProfileObjet } from "./model/userProfileObj.model";
import { SitterProfileObject } from "./model/sitterProfileObject.model";
import { UserPetObject } from "./model/userPetObject.modal";
import { BookingProfileComponent } from "./components/booking-profile/booking-profile.component";
import { DataRecycleService } from "./services/data-recycle.service";
import { BecomeASitterComponent } from "./components/become-a-sitter/become-a-sitter.component";
import { CodeComponent } from "../assets/examples/checkboxes and radio button/code";
import { GoogleMapComponent } from "./components/google-map/google-map.component";
import { SitterListPageComponent } from "./components/sitter-list-page/sitter-list-page.component";
import { SitterProfileCardComponent } from "./components/sitter-list-page/sitter-profile-card/sitter-profile-card.component";
import { PetServiceFilterComponent } from "./components/pet-service-filter/pet-service-filter.component";
import { HomePageFilterComponent } from "./components/pet-service-filter/home-page-filter/home-page-filter.component";
import { SitterListingsFilterComponent } from "./components/pet-service-filter/sitter-listings-filter/sitter-listings-filter.component";
import { BeforeAseviceProviderComponent } from "./components/before-asevice-provider/before-asevice-provider.component";
import { NotificationService } from "./services/notification.service";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { SummaryPipe } from './pipes/summary.pipe';
import { Step1LocationComponent } from './components/register-sitter/step-1-location/step-1-location.component';
import { Step2PersonalDetailsComponent } from './components/register-sitter/step-2-personal-details/step-2-personal-details.component';
import { Step3SitterPreferencesComponent } from './components/register-sitter/step-3-sitter-preferences/step-3-sitter-preferences.component';
import { Step4SitterDetailsComponent } from "./components/register-sitter/step-4-sitter-details/step-4-sitter-details.component";
import { RegisterSitterComponent } from './components/register-sitter/register-sitter.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';



export const firestoreConfig = {
  apiKey: "AIzaSyAu4jOsrSNvK-zWKatp0i_GTjoLhrFevr4",
  authDomain: "minderz-4ecba.firebaseapp.com",
  databaseURL: "https://minderz-4ecba.firebaseio.com",
  projectId: "minderz-4ecba",
  storageBucket: "minderz-4ecba.appspot.com",
  messagingSenderId: "319003344942"
};

@NgModule({
  declarations: [
    AppComponent,
    BecomeASitterComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PetReg1Component,
    SignInComponent,
    MiniDashboardComponent,
    BookingProfileComponent,
    CodeComponent,
    GoogleMapComponent,
    SitterListPageComponent,
    SitterProfileCardComponent,
    PetServiceFilterComponent,
    HomePageFilterComponent,
    SitterListingsFilterComponent,
    BeforeAseviceProviderComponent,
    SummaryPipe,
    Step1LocationComponent,
    Step2PersonalDetailsComponent,
    Step3SitterPreferencesComponent,
    Step4SitterDetailsComponent,
    RegisterSitterComponent,
    UploadListComponent,
    UploadFormComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firestoreConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    CustomFormsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCbt0jWTVPaN546r8hq4LFGBN2F7NrMmq0",
      libraries: ["places"]
    })
  ],
  providers: [
    UserService,
    CacheService,
    AuthGuard,
    AuthService,
    DataRecycleService,
    UserProfileObjet,
    SitterProfileObject,
    UserPetObject,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
