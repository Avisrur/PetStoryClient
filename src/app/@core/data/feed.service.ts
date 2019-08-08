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

  feed: Post[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Post[]>(this.postsUrl).subscribe(feed => this.feed = feed);
  }

  // tslint:disable-next-line:member-ordering
  postsUrl = 'http://localhost:3000/posts';


  getPosts(): Post[] {
    return this.feed;
  }

  createPost(body): Observable<Post> {
    body = JSON.stringify(body);
    console.log(body);
    this.feed.push(body);
    console.log(this.feed);
    return this.http.post<Post>(this.postsUrl, body);
  }


}
