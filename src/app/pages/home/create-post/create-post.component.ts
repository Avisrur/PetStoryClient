import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FeedService} from '../../../@core/data/feed.service';
import {Post} from '../post';
import {User, UserService} from '../../../@core/data/user.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {


  private isSending: boolean;

  public errorMsg: string;
  public infoMsg: string;

  postToCreate: Post = new Post();
  currentUser: User;

  constructor(private feedService: FeedService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
    this.postToCreate.setPostText('');
  }

  submit() {
    console.log(this.postToCreate);
    this.infoMsg = 'Processing your request.. Wait a minute';
    this.postToCreate.setUserId(this.currentUser._id);
    this.postToCreate.setUsername(this.currentUser.username);
    this.postToCreate.setUserImage(this.currentUser.picture);
    this.postToCreate.createCurrentTimeStamp();
    console.log(this.postToCreate);
    this.feedService.createPost(this.postToCreate);
    this.router.navigate(['pages/home']);
  }
}
