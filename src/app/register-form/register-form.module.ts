import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegisterFormComponent } from './register-form.component';
import {CommonModule} from '@angular/common';
import { FileUploadModule } from "../file-upload/file-upload.module";
import { FileUploadComponent } from "../file-upload/file-upload.component";
import { FileUploadService } from "../@core/data/file-upload.service";

@NgModule({
  declarations: [
    RegisterFormComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [
    FileUploadService
  ]
})
export class RegisterFormModule { }
