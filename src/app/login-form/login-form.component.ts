import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../@core/data/user.service';
import {Router} from '@angular/router';

// import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  showMessages: any = {};
  userZ: any = {};
  errors: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    const payload = {
      username: e.target.elements[0].value,
      password: e.target.elements[1].value
    };
    // this.http.post('localhost:3000/login', payload)
    //   .subscribe(
    //     data => {
    //       this.user.setUserLoggedIn();
    //       this.router.navigate(['home']);
    //     },
    //     err => alert(JSON.stringify(err.error))
    //   );
  }
}
