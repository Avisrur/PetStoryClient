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

  public feed: Array<Post>;


  constructor(private feedService: FeedService) {
  }

  ngOnInit() {
    this.feedService.getPosts().subscribe(data => {
      console.log(data);
      this.feed = data['posts']
    });
  }

}
