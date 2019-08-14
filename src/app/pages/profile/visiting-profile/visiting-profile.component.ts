import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../../../@core/data/user.service';
import {Post} from '../../home/post';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../../@core/data/pet.service';
import {FeedService} from '../../../@core/data/feed.service';

@Component({
  selector: 'app-visiting-profile',
  templateUrl: './visiting-profile.component.html',
  styleUrls: ['./visiting-profile.component.css']
})
export class VisitingProfileComponent implements OnInit {

  currentUser: User;
  visitedProfile: any = {};
  feed: Array<Post>;
  isVisiting: boolean;
  follow: any;
  private isFollowingVisitedUser: boolean;

  constructor(private service: UserService,
              private router: Router,
              private petService: PetService,
              private feedService: FeedService,
              private route: ActivatedRoute) {
    this.route.paramMap
      .subscribe(params => {
        const id = params.get('id');
        this.service.getUserById(id).subscribe(user => {
          this.visitedProfile = user;
          this.currentUser = this.service.getCurrentUser();
          this.isFollowingVisitedUser = this.isCurrentUserFollowingVisitedUser();
          this.follow = this.isFollowingVisitedUser ? 'Unfollow' : 'Follow';
        });
      });
  }

  private isCurrentUserFollowingVisitedUser() {
    const followingList = this.currentUser.following.map(user => user._id);
    for (let i = 0; i < followingList.length; i++) {
      if (followingList[i] === this.visitedProfile._id) {
        return true;
      }
    }
    return false;
  }

  ngOnInit() {
    this.feedService.getPosts().subscribe(data => {
      this.feed = data['posts'].filter(item => item.userId === this.visitedProfile._id );
    });
  }

  followOrUnfollow(id) {
    if (this.isFollowingVisitedUser) {
      this.service.unfollowUser(this.currentUser._id, this.visitedProfile._id)
        .subscribe(() => {
          this.isFollowingVisitedUser = false;
          this.follow = 'Follow';
          for (let i = 0; i < this.currentUser.following.length; i++) {
            if (this.currentUser.following[i]._id === id) {
              this.currentUser.following.splice(i, 1);
              this.service.setCurrentUser(this.currentUser);
              break;
            }
          }
          this.service.setCurrentUser(this.currentUser);
        });
    } else {
      this.isFollowingVisitedUser = true;
      this.follow = 'Unfollow';
      this.currentUser.following.push(this.visitedProfile._id);
      this.service.updateUser(this.currentUser).subscribe(data => {
        this.service.setCurrentUser(data);
        this.currentUser = data;
      });
    }
  }

  goToProfile(_id: string) {
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    if (_id != this.service.getCurrentUser()._id) {
      this.router.navigate(['/pages/profile/', _id]);
    } else {
      this.router.navigate(['/pages/profile'])
    }
  }
}
