import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanActivate, Routes,  RouterModule} from '@angular/router';
import { BookServiceComponent } from './components/book-service/book-service.component';
import { HomeComponent } from './components/home/home.component';
import { BecomeAsitterComponent } from './components/become-asitter/become-asitter.component';
import { MiniDashboardComponent } from './components/mini-dashboard/mini-dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SitterReg2Component } from './components/sitter-reg-2/sitter-reg-2.component';
import { SitterReg3Component } from './components/sitter-reg-3/sitter-reg-3.component';
import { PetReg1Component } from './components/pet-reg-1/pet-reg-1.component';
import { PetReg2Component } from './components/pet-reg-2/pet-reg-2.component';
// import { CanActivate } from '@angular/router/src/interfaces';

const routes: Routes = [
 {
   path: '',
  redirectTo: 'home',
  pathMatch: 'full'

 }, {
  path: 'home',
  component: HomeComponent
}
,
  {
    path: 'signIn',
    component: SignInComponent
  }
  ,
  {
    path: 'becomeaSitter',
    component: BecomeAsitterComponent,
    // canActivate: [AuthGuard]

  }

  ,
  {
    path: 'miniDash',
    component: MiniDashboardComponent
  }
  ,
  {
    path: 'sitterRegister2',
    component: SitterReg2Component
  }
  ,
  {
    path:'sitterRegister3',
    component: SitterReg3Component
  }
  ,
  {
    path: 'PetRegister1',
    component: PetReg1Component
  }
  ,
  {
    path: 'PetRegister2',
    component: PetReg2Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
