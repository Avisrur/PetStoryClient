import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};


@Injectable({
  providedIn: 'root',
})
export class FeedService {
  postsUrlIO = 'http://localhost:3001';
  postsUrl = 'http://localhost:3000/posts';
  private socket;


  constructor(private http: HttpClient) {
    this.socket = io(this.postsUrlIO);
  }


  getPosts() {
    return this.http.get(this.postsUrl);
  }


  createPost(post) {
    this.socket.emit('new-post', post);
  }


}
