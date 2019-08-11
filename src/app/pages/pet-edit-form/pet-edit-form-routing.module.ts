import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PetEditFormComponent} from './pet-edit-form.component';

const routes: Routes = [{
  path: '',
  component: PetEditFormComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetEditFormRoutingModule {
}
