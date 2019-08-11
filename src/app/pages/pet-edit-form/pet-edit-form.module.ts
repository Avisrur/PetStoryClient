import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PetEditFormComponent} from './pet-edit-form.component';
import {PetEditFormRoutingModule} from './pet-edit-form-routing.module';
import { FileUploadModule } from "../../file-upload/file-upload.module";
import { FileUploadComponent } from "../../file-upload/file-upload.component";
import { FileUploadService } from "../../@core/data/file-upload.service";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PetEditFormRoutingModule,
    FileUploadModule,
    FormsModule
  ],
  declarations: [
    PetEditFormComponent,
    FileUploadComponent
  ],
  providers: [
    FileUploadService
  ]
})
export class PetEditFormModule { }
