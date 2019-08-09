import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../pages/home/post';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};


@Injectable({
  providedIn: 'root',
})
export class FeedService {

  // tslint:disable-next-line:member-ordering
  postsUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {
  }


  initPosts() {
    return this.http.get(this.postsUrl)
  }


  createPost(body): Observable<Post> {
    body = JSON.stringify(body);
    console.log(body);
    return this.http.post<Post>(this.postsUrl, body, httpOptions);
  }


}
