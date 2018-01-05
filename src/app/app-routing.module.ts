import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookServiceComponent } from './components/book-service/book-service.component';
import { HomeComponent } from './components/home/home.component';
import { ClientRegComponent } from './components/client-reg/client-reg.component';
import { SitterReg1Component } from './components/sitter-reg-1/sitter-reg-1.component';
import { SitterReg4Component } from './components/sitter-reg-4/sitter-reg-4.component';

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
    path: 'geolocation',
    component: BookServiceComponent
  },
  {
    path: 'ClientReg',
    component: ClientRegComponent
  },
  {
    path: 'sitterReg1',
    component: SitterReg1Component
  },
  {
    path: 'sitterReg4',
    component: SitterReg4Component
  }


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
export class AppRoutingModule { }
