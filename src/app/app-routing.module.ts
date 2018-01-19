import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MiniDashboardComponent } from './components/mini-dashboard/mini-dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PetReg1Component } from './components/pet-reg-1/pet-reg-1.component';
import { BookingProfileComponent } from './components/booking-profile/booking-profile.component';
import { BecomeASitterComponent } from './components/become-a-sitter/become-a-sitter.component';
import { CodeComponent } from '../assets/examples/checkboxes and radio button/code';

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
    path: 'profile',
    component: MiniDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'become',
    component: BecomeASitterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addpet',
    component: PetReg1Component,
  }, {
    path: 'bookingprofile',
    component: BookingProfileComponent,
  }, {
    path: 'code',
    component: CodeComponent,
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
export class AppRoutingModule { }
