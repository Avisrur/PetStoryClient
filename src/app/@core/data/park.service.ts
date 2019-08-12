import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {User} from './user.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

export class Park {
  _id?: string;
  name?: string;
  address?: string;
  likes?: number;
  timestamp?: Date;

  setLikes(number: number) {
    this.likes = number;

  }
  createCurrentTimeStamp() {
    this.timestamp = new Date();
  }
}

@Injectable()
export class ParkService {

  parksUrl = 'http://localhost:3000/parks';

  constructor(private http: HttpClient) {
  }


  get parks(): Observable<Park[]> {
    return this.http.get<Park[]>(this.parksUrl);
  }

  registerPark(body): Observable<Park> {
    body = JSON.stringify(body);

    return this.http.post<Park>(this.parksUrl, body, httpOptions);
  }

  getParkById(id): Observable<Park> {
    return this.http.get<Park>(this.parksUrl + '/' + id);
  }

  getAllParks() {
    return this.http.get(this.parksUrl);
  }

  updatePark(body) {
    const id = body._id;
    body = JSON.stringify(body);

    return this.http.put<Park>(this.parksUrl + '/' + id, body, httpOptions);
  }
}
