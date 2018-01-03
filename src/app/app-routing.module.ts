import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanActivate, Routes,  RouterModule} from '@angular/router';
import { BookServiceComponent } from './components/book-service/book-service.component';
import { HomeComponent } from './components/home/home.component';
import { BecomeAsitterComponent } from './components/become-asitter/become-asitter.component';
import { MiniDashboardComponent } from './components/mini-dashboard/mini-dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
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
    path: 'geolocation',
    component: BookServiceComponent
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


  // { path: ' ',
  //  component:
  // },
  // {
  //   path: ' ',
  //   component:  ,
  //    canActivate: [ ]
  //   }

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
