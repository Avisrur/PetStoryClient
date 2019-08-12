import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParksComponent} from './parks.component';
import {ParksRoutingModule} from './parks-routing.module';
import {AgmCoreModule} from '@agm/core';
import {MatTableModule} from '@angular/material';
import {ParkService} from '../../@core/data/park.service';
import { ParkTableComponent } from './park-table/park-table.component';
import { ParkCreateComponent } from './park-create/park-create.component';
import {FormsModule} from '@angular/forms';
import { ParkEditComponent } from './park-edit/park-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ParksRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOmGxtu_r-QpPs6zhgX_ppWIlzDukQ2UM',
      libraries: ['places']
    }),
    MatTableModule,
    FormsModule
  ],
  declarations: [
    ParksComponent,
    ParkTableComponent,
    ParkCreateComponent,
    ParkEditComponent
  ],
  providers: [
    ParkService
  ]
})
export class ParksModule {

}
