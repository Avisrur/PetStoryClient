import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../../@core/data/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;

  constructor(private service: UserService, private router: Router) { 
    this.currentUser = this.service.getCurrentUser();
  }

  ngOnInit() {
  }

  registerPet() {
    this.router.navigate(['/Pages/petRegistration']);
  }
}
