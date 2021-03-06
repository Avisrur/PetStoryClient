import {Component, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import { User, UserService } from 'app/@core/data/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  menuItems: any = [];
  searchValue: string = "";
  usersFromSearch: Array<User> = new Array<User>();

  constructor(private router: Router,
              private userService: UserService) {
    this.menuItems.push(
      {
        name: 'Home',
        link: '/pages',
        icon: 'home'
      },
      {
        name: 'My Profile',
        link: '/pages/profile',
        icon: 'person'
      },
      {
        name: 'Parks',
        link: '/pages/parks',
        icon: 'location_on'
      },
      {
        name: 'Logout',
        link: '/',
        icon: 'backspace'
      });
  }

  ngOnInit() {
  }

  updateUsersList() {
    this.userService.getUserByAutoComplete(this.searchValue)
      .subscribe(data => this.usersFromSearch = data['users'])
  }

  visitToProfile(userId) {
    this.usersFromSearch = [];
    if (this.userService.getCurrentUser()._id != userId) {
      this.router.navigate(['/pages/profile', userId]);
    } else {
      this.router.navigate(['/pages/profile']);
    }
  }
}
