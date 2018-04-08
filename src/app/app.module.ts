// All modules
import { AgmCoreModule } from "@agm/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFireModule } from 'angularfire2';

 
// All app services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth-service.service';
import { CacheService } from './services/cache.service';
import { DataRecycleService } from './services/data-recycle.service';
import { NotificationService } from './services/notification.service';
import { ValidationService } from './services/validation.service';
import { ClientRegisterService } from './services/client-register.service';
import { RegisterService } from './services/register.service';
import { ReviewTestimonialService } from './services/review-testimonial.service';
import { FilterService } from './services/filter.service';
import { RatingServiceService } from './services/rating-service.service';
import { AuthGuard } from './services/auth-guard.service';
import { UploadFilesService } from './services/upload-files.service';
import { RegisterPetService } from './services/register-pet.service';


// All app components
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormRvwComponent } from './components/form-rvw/form-rvw.component';
import { MiniDashboardComponent } from './components/mini-dashboard/mini-dashboard.component';
import { PetReg1Component } from './components/pet-reg-1/pet-reg-1.component';
import { BookingProfileComponent } from './components/booking-profile/booking-profile.component';
import { CalendarComponent } from './components/booking-profile/Calendar/calendar.component';
import { CodeComponent } from '../assets/examples/checkboxes and radio button/code';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { SitterListPageComponent } from './components/sitter-list-page/sitter-list-page.component';
import { SitterProfileCardComponent } from './components/sitter-list-page/sitter-profile-card/sitter-profile-card.component';
import { PetServiceFilterComponent } from './components/pet-service-filter/pet-service-filter.component';
import { HomePageFilterComponent } from './components/pet-service-filter/home-page-filter/home-page-filter.component';
import { SitterListingsFilterComponent } from './components/pet-service-filter/sitter-listings-filter/sitter-listings-filter.component';
import { BeforeAseviceProviderComponent } from './components/before-asevice-provider/before-asevice-provider.component';
import { TestimonialFormComponent } from './components/testimonial-form/testimonial-form.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { Step1LocationComponent } from './components/registration/register-client/step-1-location/step-1-location.component';
// tslint:disable-next-line:max-line-length
import { Step2PersonalDetailsComponent } from './components/registration/register-client/step-2-personal-details/step-2-personal-details.component';
import { Step3SitterPreferencesComponent } from './components/registration/register-sitter/step-3-sitter-preferences/step-3-sitter-preferences.component';
// tslint:disable-next-line:max-line-length
import { Step4SitterDetailsComponent } from './components/registration/register-sitter/step-4-sitter-details/step-4-sitter-details.component';
import { RegisterComponent } from './components/registration/register.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { Step1DetailsComponent } from './components/pet-registration/step-1-details/step-1-details.component';
import { Step2PreferenceComponent } from './components/pet-registration/step-2-preference/step-2-preference.component';
import { PetRegistrationComponent } from './components/pet-registration/pet-registration.component';

// All app models
import { UserProfileObjet } from './model/userProfileObj.model';
import { SitterProfileObject } from './model/sitterProfileObject.model';
import { UserPetObject } from './model/userPetObject.modal';
import { Questions } from './model/question.model';
import { Pet } from './model/pet';

// All app pipes
import { SummaryPipe } from './pipes/summary.pipe';
import { PromoComponent } from './components/before-asevice-provider/promo/promo.component';
import { QuestionsComponent } from './components/before-asevice-provider/questions/questions.component';



export const firestoreConfig = {
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
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PetReg1Component,
    SignInComponent,
    MiniDashboardComponent,
    BookingProfileComponent,
    CalendarComponent,
    CodeComponent,
    GoogleMapComponent,
    SitterListPageComponent,
    SitterProfileCardComponent,
    PetServiceFilterComponent,
    HomePageFilterComponent,
    SitterListingsFilterComponent,
   TestimonialFormComponent,
   FormRvwComponent,
    BeforeAseviceProviderComponent,
    SummaryPipe,
    PetProfileComponent,
    Step1LocationComponent,
    Step2PersonalDetailsComponent,
    Step3SitterPreferencesComponent,
    Step4SitterDetailsComponent,
    RegisterComponent,
    FileNotFoundComponent,
    ReviewCardComponent,
    PetRegistrationComponent,
    Step1DetailsComponent,
    Step2PreferenceComponent,
    PromoComponent,
    QuestionsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firestoreConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    BrowserModule,
    CustomFormsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbt0jWTVPaN546r8hq4LFGBN2F7NrMmq0',
      libraries: ['places']
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
    NotificationService,
    ReviewTestimonialService,
    UploadFilesService,
    RatingServiceService,
    RegisterService,
    Questions,
    RegisterPetService,
    ClientRegisterService,
    ValidationService,
    AngularFireDatabase,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
