import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Pet} from './pet.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

@Injectable()
export class FileService {

  filesUrl = 'http://localhost:3000/files';

  constructor(private http: HttpClient) {
  }


  uploadFile() {

  }
}
