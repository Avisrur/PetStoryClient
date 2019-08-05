import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  menuItems: any = [];

  constructor(private router: Router) {
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

}
