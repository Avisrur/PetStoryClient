import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../@core/data/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  userToRegister: any = {};

  constructor(private service: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  registerUser() {
    this.service.registerUser(this.userToRegister)
      .subscribe(data => {
          console.log(data);
          alert('Patient added successfully.');
          this.router.navigate(['pages/patients']);
        },
        err => {
          console.log(err);
          alert('Something went wrong and the patient didn\'t register');
        });
  }
}
