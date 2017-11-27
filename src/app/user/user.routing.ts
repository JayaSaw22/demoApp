import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {GridComponent } from '../grid/grid.component';

const routes : Routes = [
    {path: '', redirectTo: '', pathMatch : 'full'},
    {path : 'login', component : LoginComponent },
    {path :'register', component: RegisterComponent},
    { path: 'grid' , component : GridComponent}
];

@NgModule({
    imports :[RouterModule.forChild(routes)],
    declarations :[],
    exports: [RouterModule]
})
export class UserRoutingModule { }

export const userComponents =  [LoginComponent, RegisterComponent ]