import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {Park} from '../../../@core/data/park.service';
import {FeedService} from '../../../@core/data/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public feed: Array<any> = new Array<any>();
  public postsList: Array<Post> = new Array<Post>();
  public parksList: Array<Park> = new Array<Park>();
  public allPosts: Array<any> = new Array<any>();
  public title: string;


  constructor(private feedService: FeedService) {
    this.title = 'All Posts';
  }

  ngOnInit() {
    this.feedService.getPosts().subscribe(data => {
      console.log(data);
      this.postsList = data['posts'] || [];
      this.parksList = data['parks'] || [];
      this.postsList.forEach(post => post['type'] = 'post');
      this.parksList.forEach(park => park['type'] = 'park');
      Array.prototype.push.apply(this.allPosts, this.postsList);
      Array.prototype.push.apply(this.allPosts, this.parksList);
      this.allPosts.sort(function(a, b) {
        // @ts-ignore
        return new Date(b.timestamp) - new Date(a.timestamp);
      });
      this.feed = this.allPosts;
    });
  }

  filterAllPosts() {
    this.feed = this.allPosts;
    this.title = 'All Posts';
  }

  filterPostsByStories() {
    this.feed = this.postsList;
    this.title = 'User Stories';
  }

  filterPostsByParks() {
    this.feed = this.parksList;
    this.title = 'Pet Parks';

  }


}
