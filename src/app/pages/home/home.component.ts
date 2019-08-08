import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from './post';
import {Subscription} from 'rxjs/internal/Subscription';
import {FeedService} from '../../@core/data/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public feed: Post[] = [];



  constructor(private feedService: FeedService) {
    this.feed = feedService.getPosts();
  }

  ngOnInit() {
    this.feed = this.feedService.getPosts();
  }

}
