import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {HomeRoutingModule} from './home-routing.module';
import {UserService} from '../../@core/data/user.service';
import {FeedService} from '../../@core/data/feed.service';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
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
