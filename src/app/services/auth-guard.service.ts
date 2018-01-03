import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class AuthGuard {
//  implements CanActivate/

  constructor(
    private router: Router,
    // private authservice: AuthService
  ) { }

  // canActivate(router, state: RouterStateSnapshot) {
// return this.authservice.user$.map(user => {
// if (user) {return true;
// }else {
//   this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}  } ) ;
//   return false; }
// });
//  }



}
