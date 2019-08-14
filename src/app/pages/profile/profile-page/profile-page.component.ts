import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../../../@core/data/user.service';
import {Post} from '../../home/post';
import {Router} from '@angular/router';
import {PetService} from '../../../@core/data/pet.service';
import {FeedService} from '../../../@core/data/feed.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  currentUser: User;
  visitedProfile: any = {};
  feed: Array<Post>;
  isVisiting: boolean;
  follow: any;
  private isFollowingVisitedUser: boolean;

  constructor(private service: UserService,
              private router: Router,
              private petService: PetService,
              private feedService: FeedService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.service.getUserById(this.router.getCurrentNavigation().extras.state).subscribe(user => {
        this.visitedProfile = user;
        this.currentUser = this.service.getCurrentUser();
        this.isFollowingVisitedUser = this.isCurrentUserFollowingVisitedUser();
        this.follow = this.isFollowingVisitedUser ? 'Unfollow' : 'Follow';
        this.isVisiting = true;
      });
    } else {
      this.visitedProfile = undefined;
      this.currentUser = this.service.getCurrentUser();
      this.isVisiting = false
    }
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
      this.feed = data['posts'].filter(item => item.userId === (this.visitedProfile ? this.visitedProfile._id : this.currentUser._id));
    });
  }

  registerPet() {
    this.router.navigate(['/pages/profile/add-pet']);
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

  deletePet(id) {
    this.petService.delete(id)
      .subscribe(() => {
        this.service.deletePetFromUser(this.currentUser._id, id)
          .subscribe(() => {
            for (let i = 0; i < this.currentUser.pets.length; i++) {
              if (this.currentUser.pets[i]._id === id) {
                this.currentUser.pets.splice(i, 1);
                break;
              }
            }
          })
      })
  }

  navigateToEdit(pet) {
    this.router.navigate(['/pages/profile/edit-pet'], {state: pet});
  }

  goToProfile(_id: string) {
    // @ts-ignore
    this.router.navigate(['/pages/profile'], {state: _id});
  }
}
