import { Component } from '@angular/core';
import { AuthService } from './services/auth-service.service';
import { Router } from '@angular/router';
import { CacheService } from './services/cache.service';
import { DataRecycleService } from './services/data-recycle.service';
import { Client } from './model/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/styles/helpers.css']
})
export class AppComponent {

  constructor(
    private auth: AuthService, 
    private cacheservice: CacheService, 
    private dataRecycleService: DataRecycleService, 
    private router: Router) {

// auth.user$.subscribe( user => {
//   if (user) {
// const returnUrl = localStorage.getItem('returnUrl');
// router.navigateByUrl(returnUrl);  }
// });


if (!this.auth.isLoggedIn()) {
  console.log('you are logged in: says app component');
  
  if (this.cacheservice.currentSitter === null || this.cacheservice.currentSitter === undefined) {
    console.log('the cache does not have your data');
    
    this.dataRecycleService.getCurrentUser().subscribe(response =>{
      this.cacheservice.currentSitter = response as Client;
          }) 
    
  }
}

  }


}

