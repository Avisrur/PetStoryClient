import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {AppRoutingModule} from './app-routing.module';
import {RegisterFormComponent} from './register-form/register-form.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './@core/data/user.service';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './@core/data/auth.guard';
import {TokenManagerService} from './@core/data/token-manager.service';
import {FeedService} from './@core/data/feed.service';
import {PetService} from './@core/data/pet.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    AuthGuard,
    TokenManagerService,
    FeedService,
    PetService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
