import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {PetRegisterFormComponent} from './pet-register-form/pet-register-form.component';
import {PetEditFormComponent} from './pet-edit-form/pet-edit-form.component';
import {FileUploadService} from '../../@core/data/file-upload.service';
import {FormsModule} from '@angular/forms';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { VisitingProfileComponent } from './visiting-profile/visiting-profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    MatTabsModule
  ],
  declarations: [
    ProfileComponent,
    PetRegisterFormComponent,
    PetEditFormComponent,
    ProfilePageComponent,
    VisitingProfileComponent
  ],
  providers: [
    FileUploadService
  ]
})
export class ProfileModule { }
