import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { FormRvwComponent } from './components/form-rvw/form-rvw.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MiniDashboardComponent } from './components/mini-dashboard/mini-dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PetReg1Component } from './components/pet-reg-1/pet-reg-1.component';
import { BookingProfileComponent } from './components/booking-profile/booking-profile.component';
import { CodeComponent } from '../assets/examples/checkboxes and radio button/code';
import { SitterListPageComponent } from './components/sitter-list-page/sitter-list-page.component';
import { BeforeAseviceProviderComponent } from './components/before-asevice-provider/before-asevice-provider.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { RegisterComponent } from './components/registration/register.component';
import  {PetRegistrationComponent } from './components/pet-registration/pet-registration.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signIn',
    component: SignInComponent
  },    
  {
    path: 'petProfile',
    component: PetProfileComponent
  },
  {
    path: 'bookingprofile',
    component: CodeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'become',
    component: BeforeAseviceProviderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addpet',
    component: PetRegistrationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'identity',
    component: BookingProfileComponent,
    canActivate: [AuthGuard]
  },
 
  {
    path: 'sitter-profile-listings',
    component: SitterListPageComponent
  },
  {
    path: 'registration',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'review',
    component: FormRvwComponent,
  },
  { 
    path: '**', 
    component: FileNotFoundComponent 
  }

  // children: [
  //   { path: ' ',
  //      component:,
  //      canActivate: [ ]
  //      } ]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
