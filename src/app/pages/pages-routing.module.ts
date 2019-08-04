import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
  }, {
    path: 'places',
    loadChildren: './places/places.module#PlacesModule',
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
