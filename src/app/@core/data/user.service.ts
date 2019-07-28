import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {Pet} from './pet.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

export class User {
  id?: string;
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

  currentUser: User;
  usersUrl = 'http://localhost:3000/users';

  data: User[] = [{
    id: 'avis',
    username: 'avis',
    password: '12345',
    firstName: 'Nadav',
    lastName: 'Avisrur',
    email: 'nadav@gmail.com',
    age: '28',
    picture: 'assets/images/old1.jpeg',
    pets: [{id: 'a'}]
  }, {
    id: 'lidor',
    username: 'lidor',
    password: '12345',
    firstName: 'Lidor',
    lastName: 'Rosencovich',
    email: 'lidor@yandex.ru',
    age: '27',
    picture: 'assets/images/old2.jpeg'
  }];

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUserById1(id) {
    for (const item of this.data) {
      if (item['id'] === id) {
        return item;
      }
    }
  }


  registerUser(body): Observable<User> {
    body = JSON.stringify(body);
    console.log(body);
    return this.http.post<User>(this.usersUrl + '/register', body, httpOptions);
  }

  login(userToLogin: User) {
    const body = JSON.stringify(userToLogin);
    console.log(body);
    return this.http.post<User>(this.usersUrl + '/login', body, httpOptions);
  }

  getUserById(id): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + id);
  }


  // tslint:disable-next-line:member-ordering
  isUserLoggedIn;
  // tslint:disable-next-line:member-ordering
  username;


  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.username = 'admin';
  }

  setUserLogOut() {
    this.isUserLoggedIn = false;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }


}
