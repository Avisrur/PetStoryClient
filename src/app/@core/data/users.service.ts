import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

export class User {
  constructor(public id: string, public name: string) {
  }
}

let counter = 0;

@Injectable()
export class UsersService {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    email: 'mdo@gmail.com',
    knownSensitivities: 'Lactose Intolerance, Aspirin',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Cartia,Duplex',
    lastHMO: '21/08/2017',
    lastHospitalization: '14/08/2016',
    age: '88',
    picture: 'assets/images/old1.jpeg',
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    email: 'fat@yandex.ru',
    knownSensitivities: 'Penicillin, Lactose Intolerance',
    medicalHistory: 'Diabetes',
    medications: 'Glucofage,Cartia',
    lastHMO: '17/2/2017',
    lastHospitalization: '13/04/2016',
    age: '75',
    picture: 'assets/images/old2.jpeg',
  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    email: 'twitter@outlook.com',
    knownSensitivities: 'Penicillin',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Glucofage,Duplex',
    lastHMO: '27/11/2017',
    lastHospitalization: '15/04/2016',
    age: '78',
    picture: 'assets/images/old3.jpeg',
  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    email: 'snow@gmail.com',
    knownSensitivities: 'Ibuprofen, Lactose Intolerance',
    medicalHistory: 'Diabetes',
    medications: 'Glucofage,Cartia,Duplex',
    lastHMO: '17/01/2017',
    lastHospitalization: '14/08/2016',
    age: '80',
    picture: 'assets/images/old4.jpeg',
  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    email: 'jack@yandex.ru',
    knownSensitivities: 'Lactose Intolerance, Aspirin',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Glucofage',
    lastHMO: '27/09/2017',
    lastHospitalization: '14/01/2016',
    age: '73',
    picture: 'assets/images/old2.jpeg',
  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    email: 'ann@gmail.com',
    knownSensitivities: 'Penicillin, Antibiotics',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Glucofage,Cartia,Duplex',
    lastHMO: '17/12/2017',
    lastHospitalization: '08/06/2016',
    age: '71',
    picture: 'assets/images/old5.jpeg',
  }, {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    email: 'barbara@yandex.ru',
    knownSensitivities: 'Penicillin, Lactose Intolerance',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Glucofage,Cartia,Duplex',
    lastHMO: '07/12/2017',
    lastHospitalization: '18/06/2016',
    age: '73',
    picture: 'assets/images/old6.jpg',
  }, {
    id: 8,
    firstName: 'Sevan',
    lastName: 'Bagrat',
    email: 'sevan@outlook.com',
    knownSensitivities: 'Lactose Intolerance, Antibiotics',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Glucofage,Cartia,Duplex',
    lastHMO: '03/05/2017',
    lastHospitalization: '08/12/2016',
    age: '83',
    picture: 'assets/images/old7.jpeg',
  }, {
    id: 9,
    firstName: 'Ruben',
    lastName: 'Vardan',
    email: 'ruben@gmail.com',
    knownSensitivities: 'Lactose Intolerance, Ibuprofen',
    medicalHistory: 'Diabetes',
    medications: 'Glucofage ,Duplex',
    lastHMO: '07/06/2017',
    lastHospitalization: '22/06/2016',
    age: '72',
    picture: 'assets/images/old1.jpeg',
  }, {
    id: 10,
    firstName: 'Karen',
    lastName: 'Sevan',
    email: 'karen@yandex.ru',
    knownSensitivities: 'Penicillin',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Glucofage ,Cartia ,Duplex',
    lastHMO: '7/10/2017',
    lastHospitalization: '14/03/2016',
    age: '93',
    picture: 'assets/images/old8.jpeg',
  }, {
    id: 11,
    firstName: 'Mark',
    lastName: 'Otto',
    email: 'mark@gmail.com',
    knownSensitivities: 'Penicillin, Lactose Intolerance',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Glucofage,Cartia,Duplex',
    lastHMO: '27/02/2017',
    lastHospitalization: '08/04/2016',
    age: '78',
    picture: 'assets/images/old2.jpeg',
  }, {
    id: 12,
    firstName: 'Jacob',
    lastName: 'Thornton',
    email: 'jacob@yandex.ru',
    knownSensitivities: 'Penicillin, Lactose Intolerance',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Glucofage,Duplex',
    lastHMO: '17/04/2017',
    lastHospitalization: '14/03/2016',
    age: '88',
    picture: 'assets/images/old1.jpeg',
  }, {
    id: 13,
    firstName: 'Haik',
    lastName: 'Hakob',
    email: 'haik@outlook.com',
    knownSensitivities: 'Lactose Intolerance',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Glucofage,Cartia',
    lastHMO: '22/12/2017',
    lastHospitalization: '15/06/2016',
    age: '72',
    picture: 'assets/images/old2.jpeg',
  }, {
    id: 14,
    firstName: 'Garegin',
    lastName: 'Jirair',
    email: 'garegin@gmail.com',
    knownSensitivities: 'Penicillin, Lactose Intolerance',
    medicalHistory: 'Hypertension',
    medications: 'Cartia,Duplex',
    lastHMO: '7/12/2017',
    lastHospitalization: '18/06/2016',
    age: '70',
    picture: 'assets/images/old1.jpeg',
  }, {
    id: 15,
    firstName: 'Krikor',
    lastName: 'Bedros',
    email: 'krikor@yandex.ru',
    knownSensitivities: 'Penicillin, Lactose Intolerance',
    medicalHistory: 'Diabetes, Hypertension',
    medications: 'Glucofage,Cartia,Duplex',
    lastHMO: '7/12/2017',
    lastHospitalization: '18/06/2016',
    age: '82',
    picture: 'assets/images/old2.jpeg',
  }];

  private users1 = {
    nick: {name: 'Nick', picture: 'assets/images/nick.png', age: 45, sensors: 'HR, GYRO'},
    eva: {name: 'Eva', picture: 'assets/images/eva.png', age: 45, sensors: 'HR, GYRO'},
    jack: {name: 'Jack', picture: 'assets/images/jack.png', age: 45, sensors: 'HR, GYRO'},
    lee: {name: 'Lee Wong', picture: 'assets/images/lee.png', age: 45, sensors: 'HR, GYRO'},
    alan: {name: 'Alan Thompson', picture: 'assets/images/alan.png', age: 45, sensors: 'HR, GYRO'},
    kate: {name: 'Kate Martinez', picture: 'assets/images/kate.png', age: 45, sensors: 'HR, GYRO'},
  };


  getData() {
    return this.data;
  }

  getUserById(id) {
    for (const item of this.data) {
      if (item['id'] === id) {
        return item;
      }
    }
  }

  private userArray: any[];
  usersUrl = 'localhost:3000/users';

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users1);
  }

  getUsers1(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

  getUserById1(id): Observable<any> {
    return this.http.get(this.usersUrl + id)
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }

  private isUserLoggedIn;
  public username;


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
