import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {User} from './user.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

export class Pet {
  _id: string;
  name?: string;
  type?: string;
  image?: string;
  userId?: string;
}

@Injectable()
export class PetService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:member-ordering
  petsUrl = 'http://localhost:3000/pets';

  get pets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }

  registerPet(body): Observable<Pet> {
    body = JSON.stringify(body);

    return this.http.post<Pet>(this.petsUrl, body, httpOptions);
  }

  addPetToUser(user: User, pet): Observable<Pet> {
    pet = JSON.stringify(pet);
    return this.http.post<any>(this.petsUrl + user._id, pet, httpOptions);
  }

  getPetById(id): Observable<Pet> {
    return this.http.get<Pet>(this.petsUrl + '/' + id);
  }

  delete(id) {
    return this.http.delete(this.petsUrl + '/' + id);
  }

  editPet(pet) {
    const body = JSON.stringify(pet);
    return this.http.put(this.petsUrl + '/' + pet._id, body, httpOptions);
  }
}
