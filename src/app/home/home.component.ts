import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItems: any = [];

  constructor(private router: Router) {
    this.menuItems.push({ name:'Home', link: '/home', isActive:this.router.url === '/home' }, { name:'My Profile', link: '/home/profile', isActive:false}, { name:'Places', link: '/home/places', isActive:false}, { name:'Admin', link: '/home/admin', isActive:false}, { name:'About', link: '/home', isActive:false});
   }

  ngOnInit() {
  }

}
