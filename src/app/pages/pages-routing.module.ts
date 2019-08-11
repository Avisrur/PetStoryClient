import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  }, {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
  }, {
    path: 'petRegistration',
    loadChildren: './pet-register-form/pet-register-form.module#PetRegisterFormModule',
  }, {
    path: 'parks',
    loadChildren: './parks/parks.module#ParksModule',
  }, {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/home'
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
