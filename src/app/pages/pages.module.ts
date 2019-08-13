import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ProfileModule} from './profile/profile.module';
import {HomeModule} from './home/home.module';
import {ParksModule} from './parks/parks.module';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

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
    ParksModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PagesModule { }
