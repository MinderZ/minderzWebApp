import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { BookServiceComponent } from './components/book-service/book-service.component';
import { HomeComponent } from './components/home/home.component';

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
