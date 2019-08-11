import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {User} from './user.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'})
};

@Injectable()
export class FileUploadService {
  httpClient: any;
  fileUploadUrl = 'http://localhost:3000/files';

  constructor(private http: HttpClient) {
  }

  postFile(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    
    return this.http.post<any>(this.fileUploadUrl + "/", formData, httpOptions);
}

}
