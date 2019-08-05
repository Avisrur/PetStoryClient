import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParksComponent} from './parks.component';
import {ParksRoutingModule} from './parks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ParksRoutingModule
  ],
  declarations: [
    ParksComponent
  ]
})
export class ParksModule { }
