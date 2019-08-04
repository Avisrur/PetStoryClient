import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, UserService} from '../@core/data/user.service';
import {Router} from '@angular/router';

// import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  showMessages: any = {};
  userToLogin: User = new User();
  errors: string[] = [];

  userToRegister: User = new User();

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
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
          alert(err.error.message);
        });
  }
}
