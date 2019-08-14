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
  following?: User[];
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
    return this.http.post<User>(this.usersUrl + '/register', body, httpOptions);
  }

  login(userToLogin: User) {
    const body = JSON.stringify(userToLogin);
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

  deletePetFromUser(userId: string, petId: string) {
    return this.http.delete<any>(this.usersUrl + '/user/' + userId + '/pet/' + petId);
  }

  updateUser(user: User) {
    const body = JSON.stringify(user);
    return this.http.put<any>(this.usersUrl + '/' + user._id, body, httpOptions);
  }

  unfollowUser(userId: string, userIdToUnfollow: string) {
    return this.http.delete<any>(this.usersUrl + '/user/' + userId + '/userToUnfollow/' + userIdToUnfollow);
  }

  getUserByAutoComplete(nameToSearch) {
    return this.http.get(this.usersUrl + '/user/' + nameToSearch);
  }
}
