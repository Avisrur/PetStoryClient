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
        name: 'Admin',
        link: '/pages/admin',
        icon: ''
      }, {
        name: 'About',
        link: '/pages',
        icon: ''
      });
  }

  ngOnInit() {
  }

  updateUsersList() {
    this.userService.getUserByAutoComplete(this.searchValue)
      .subscribe(data => this.usersFromSearch = data['users'])
  }

  visitToProfile(user) {
    this.usersFromSearch = [];
    this.router.navigate(['/pages/profile'], {state: user});
  }
}
