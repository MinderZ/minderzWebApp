import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookServiceComponent } from './components/book-service/book-service.component';
import { HomeComponent } from './components/home/home.component';
// import { BecomeAsitterComponent } from './components/become-asitter/become-asitter.component';
import { MiniDashboardComponent } from './components/mini-dashboard/mini-dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
// import { CanActivate } from '@angular/router/src/interfaces';
import { SitterReg4Component } from './components/sitter-reg-4/sitter-reg-4.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'signIn',
    component: SignInComponent
  }
  ,
  {
    path: 'miniDash',
    component: MiniDashboardComponent
  },
  // {
  //   path: 'sitterReg1',
  //   component: SitterReg1Component
  // },
  {
    path: 'sitterReg',
    component: SitterReg4Component
  }
,  {
    path: 'home',
    component: HomeComponent ,
    //  canActivate: [ ]
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
