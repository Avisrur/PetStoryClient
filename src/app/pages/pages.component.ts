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
        isActive: this.router.url === '/pages'
      },
      {
        name: 'My Profile',
        link: '/pages/profile',
        isActive: false
      },
      {
        name: 'Places',
        link: '/pages/places',
        isActive: false
      },
      {
        name: 'Admin',
        link: '/pages/admin',
        isActive: false
      }, {
        name: 'About',
        link: '/pages',
        isActive: false
      });
  }

  ngOnInit() {
  }

}
