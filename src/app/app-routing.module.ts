import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { BookServiceComponent } from './components/book-service/book-service.component';

const routes: Routes = [

  {
    path: 'geolocation',
    component: BookServiceComponent
  }

  // {
  // redirectTo: 'home ',
  // pathMatch: 'full'
  //    path: ' ',
  //     component:
  //     },

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
