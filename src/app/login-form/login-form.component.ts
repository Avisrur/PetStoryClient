import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  showMessages: any = {};
  userZ: any = {};
  errors: string[] = [];

  constructor(private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    const payload = {
      username: e.target.elements[0].value,
      password: e.target.elements[1].value
    };
    this.http.post('localhost:3000/login', payload)
      .subscribe(
        data => {
          this.token.generateNewToken(data);
          this.user.setUserLoggedIn();
          this.router.navigate(['pages/chat']);
        },
        err => alert(JSON.stringify(err.error))
      );
  }
}
