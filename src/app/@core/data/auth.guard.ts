import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Router} from '@angular/router';
import {UsersService} from './users.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user: UsersService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.user.getUserLoggedIn()) {
      console.log('You are not authenticated');
      this.router.navigate(['/']);
      return this.user.getUserLoggedIn();
    }
    return true;
  }
}
