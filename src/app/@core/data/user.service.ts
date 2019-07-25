import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {Pet} from './pet.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export class User {
  id: string;
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

  data: User[] = [{
    id: 'avis',
    firstName: 'Nadav',
    lastName: 'Avisrur',
    email: 'nadav@gmail.com',
    age: '28',
    picture: 'assets/images/old1.jpeg',
    pets: [{id: 'a'}],
    friends: [{id: 'lidor'}]
  }, {
    id: 'lidor',
    firstName: 'Lidor',
    lastName: 'Rosencovich',
    email: 'lidor@yandex.ru',
    age: '27',
    picture: 'assets/images/old2.jpeg',
    friends: [{id: 'avis'}]
  }];


  getData() {
    return this.data;
  }

  getUserById1(id) {
    for (const item of this.data) {
      if (item['id'] === id) {
        return item;
      }
    }
  }

  // tslint:disable-next-line:member-ordering member-ordering
  private userArray: User[];
  // tslint:disable-next-line:member-ordering
  usersUrl = 'localhost:3000/user';

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }

  registerUser(body): Observable<User> {
    body = JSON.stringify(body);
    return this.http.post<User>(this.usersUrl, body, httpOptions);
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
