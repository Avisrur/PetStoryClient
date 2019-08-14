import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PetRegisterFormComponent} from './pet-register-form/pet-register-form.component';
import {PetEditFormComponent} from './pet-edit-form/pet-edit-form.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {VisitingProfileComponent} from './visiting-profile/visiting-profile.component';

const routes: Routes = [{
  path: '',
  component: ProfilePageComponent,
}, {
  path: ':id',
  component: VisitingProfileComponent,
}, {
  path: 'pets/add-pet',
  component: PetRegisterFormComponent,
}, {
  path: 'pets/edit-pet',
  component: PetEditFormComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {
}
