import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../@core/data/user.service';
import {Router} from '@angular/router';
import {TokenManagerService} from '../@core/data/token-manager.service';



@Component({
  selector: 'app-root',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  userToLogin: User = new User();

  constructor(private service: UserService,
              private router: Router,
              private token: TokenManagerService) {
  }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.userToLogin);
    this.service.login(this.userToLogin)
      .subscribe(data => {
          console.log(data);
          // this.token.generateNewToken(data);
          this.service.setCurrentUser(data);
          alert('user logged in successfully.');
          this.router.navigate(['/pages']);
        },
        err => {
          console.log(err);
          alert(err.error.message);
        });
  }
}
