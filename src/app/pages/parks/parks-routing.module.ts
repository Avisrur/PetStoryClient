import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ParksComponent} from './parks.component';

const routes: Routes = [{
  path: '',
  component: ParksComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParksRoutingModule {
}
