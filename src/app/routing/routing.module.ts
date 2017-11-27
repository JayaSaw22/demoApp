import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
//import {GridComponent} from '../grid/grid.component';
import {UserModule} from '../user/user.module';




@NgModule({
  imports: [ UserModule,RouterModule.forRoot([])],
  exports :[RouterModule],
  declarations: []
})
export class RoutingModule { }
