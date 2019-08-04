import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../@core/data/user.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  userToLogin: User = new User();

  constructor(private service: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.userToLogin);
    this.service.login(this.userToLogin)
      .subscribe(data => {
          console.log(data);
          alert('user logged in successfully.');
          this.router.navigate(['/pages']);
        },
        err => {
          console.log(err);
          alert(err.error.message);
        });
  }
}
