import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { PlacesComponent } from './places/places.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [{
      path: 'profile',
      component: ProfileComponent,
    }, {
      path: 'places',
      component: PlacesComponent,
    }, {
      path: 'admin',
      component: AdminComponent,
    }, 
    {path: '**', redirectTo: 'chat'}],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}