import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Pet} from './pet.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

export class User {
  _id?: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  pets?: Pet[];
  friends?: User[];
  email?: string;
  age?: string;
  picture?: string;
}

@Injectable()
export class UserService {

  currentUser: User = new User();
  usersUrl = 'http://localhost:3000/users';
  isUserLoggedIn;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }

  getCurrentUser() {
    return this.currentUser;
  }


  registerUser(body): Observable<User> {
    body = JSON.stringify(body);
    console.log(body);
    return this.http.post<User>(this.usersUrl + '/register', body, httpOptions);
  }

  login(userToLogin: User) {
    const body = JSON.stringify(userToLogin);
    console.log(body);
    return this.http.post<any>(this.usersUrl + '/login', body, httpOptions);
  }

  getUserById(id): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + id);
  }


  setUserLogOut() {
    this.isUserLoggedIn = false;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }


  setCurrentUser(user: User) {
    this.currentUser = user;
    this.isUserLoggedIn = true;
  }
}
