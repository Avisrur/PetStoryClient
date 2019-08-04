import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {AuthGuard} from './@core/data/auth.guard';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule'},
  {path: ' ', redirectTo: '/login'},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
