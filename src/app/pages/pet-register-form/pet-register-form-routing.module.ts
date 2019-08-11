import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PetRegisterFormComponent} from './pet-register-form.component';

const routes: Routes = [{
  path: '',
  component: PetRegisterFormComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetRegisterFormRoutingModule {
}
