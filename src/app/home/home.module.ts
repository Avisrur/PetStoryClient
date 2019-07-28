import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PlacesComponent } from './places/places.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    PlacesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
