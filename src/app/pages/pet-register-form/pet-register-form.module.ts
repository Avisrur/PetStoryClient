import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PetRegisterFormComponent} from './pet-register-form.component';
import {PetRegisterFormRoutingModule} from './pet-register-form-routing.module';
import { FileUploadModule } from "../../file-upload/file-upload.module";
import { FileUploadComponent } from "../../file-upload/file-upload.component";
import { FileUploadService } from "../../@core/data/file-upload.service";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PetRegisterFormRoutingModule,
    FileUploadModule,
    FormsModule
  ],
  declarations: [
    PetRegisterFormComponent,
    FileUploadComponent
  ],
  providers: [
    FileUploadService
  ]
})
export class PetRegisterFormModule { }
