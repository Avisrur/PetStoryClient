import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParksComponent} from './parks.component';
import {ParksRoutingModule} from './parks-routing.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ParksRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOmGxtu_r-QpPs6zhgX_ppWIlzDukQ2UM',
      libraries: ['places']
    })
  ],
  declarations: [
    ParksComponent
  ]
})
export class ParksModule {

}
