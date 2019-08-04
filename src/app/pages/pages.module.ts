import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ProfileModule} from './profile/profile.module';
import {HomeModule} from './home/home.module';
import {PlacesModule} from './places/places.module';
import {AdminModule} from './admin/admin.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    ProfileModule,
    HomeModule,
    PlacesModule,
    AdminModule
  ],
  providers: []
})
export class PagesModule { }
