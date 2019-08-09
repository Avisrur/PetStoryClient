import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService, User} from '../@core/data/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  userToRegister: User = new User();

  constructor(private service: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  registerUser() {
    this.service.registerUser(this.userToRegister)
      .subscribe(data => {
          console.log(data);
          alert('user registered successfully.');
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
          alert(err.error.message);
        });
  }
}
