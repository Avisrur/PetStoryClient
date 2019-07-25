import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {User} from './user.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export class Pet {
  id: string;
  name?: string;
  type?: string;
  user?: User;
}

@Injectable()
export class PetService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:member-ordering
  petsUrl = 'localhost:3000/pets';

  get pets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }

  registerPet(body): Observable<Pet> {
    body = JSON.stringify(body);
    return this.http.post<Pet>(this.petsUrl, body, httpOptions);
  }

  getPetById(id): Observable<Pet> {
    return this.http.get<Pet>(this.petsUrl + '/' + id);
  }
}
