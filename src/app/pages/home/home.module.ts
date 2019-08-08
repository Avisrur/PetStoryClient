import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {HomeRoutingModule} from './home-routing.module';
import {UserService} from '../../@core/data/user.service';
import {FeedService} from '../../@core/data/feed.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    CreatePostComponent
  ],
  providers: [
    FeedService
  ]
})
export class HomeModule {
}
