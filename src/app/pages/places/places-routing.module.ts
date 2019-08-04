import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlacesComponent} from './places.component';

const routes: Routes = [{
  path: '',
  component: PlacesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesRoutingModule {
}
