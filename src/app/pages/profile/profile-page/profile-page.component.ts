import { Component, OnInit } from '@angular/core';
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

  constructor(private service: UserService,
              private router: Router,
              private petService: PetService,
              private feedService: FeedService) {
    this.visitedProfile = this.router.getCurrentNavigation().extras.state;
    this.currentUser = this.service.getCurrentUser();
    this.isVisiting = (this.visitedProfile && this.visitedProfile.username !== this.currentUser.username) ? true : false;
  }

  ngOnInit() {
    this.feedService.getPosts().subscribe(data => {
      this.feed = data['posts'].filter(item => item.userId === (this.visitedProfile ? this.visitedProfile._id : this.currentUser._id));
    });
  }

  registerPet() {
    this.router.navigate(['/pages/profile/add-pet']);
  }

  deletePet(id) {
    this.petService.delete(id)
      .subscribe(() => {
        this.service.deletePetFromUser(this.currentUser._id, id)
          .subscribe(() => {
            for (let i = 0 ; i < this.currentUser.pets.length ; i++) {
              if (this.currentUser.pets[i]._id === id){
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

}
