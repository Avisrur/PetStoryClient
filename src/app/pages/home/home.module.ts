import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {HomeRoutingModule} from './home-routing.module';
import {FeedService} from '../../@core/data/feed.service';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {FileUploadService} from '../../@core/data/file-upload.service';
import { FeedComponent } from './feed/feed.component';
import {NearestParkComponent} from './nearest-park/nearest-park.component';
import {WeatherComponent} from './weather/weather.component';
import {AngularWeatherWidgetModule, WeatherApiName} from 'angular-weather-widget';

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
    MatToolbarModule,
    AngularWeatherWidgetModule.forRoot({
      baseUrl: '', key: '6b0748f06459e016838fef68b678e61b',
      name: undefined
    })
  ],
  declarations: [
    HomeComponent,
    CreatePostComponent,
    FeedComponent,
    NearestParkComponent,
    WeatherComponent
  ],
  providers: [
    FeedService,
    FileUploadService
  ]
})
export class HomeModule {
}
