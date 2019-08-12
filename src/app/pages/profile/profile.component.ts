import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {User, UserService} from '../../@core/data/user.service';
import {Pet, PetService} from '../../@core/data/pet.service';
import { Router } from '@angular/router';
import { FeedService } from "../../@core/data/feed.service";
import { Post } from '../home/post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
    this.router.navigate(['/Pages/petRegistration']);
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
    this.router.navigate(['/pages/petEdit'], {state: pet});
  }
}
