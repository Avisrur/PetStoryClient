import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PetRegisterFormComponent} from './pet-register-form/pet-register-form.component';
import {PetEditFormComponent} from './pet-edit-form/pet-edit-form.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';

const routes: Routes = [{
  path: '',
  component: ProfilePageComponent,
}, {
  path: 'add-pet',
  component: PetRegisterFormComponent,
}, {
  path: 'edit-pet',
  component: PetEditFormComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {
}
