import {NgModule} from '@angular/core';
import { UserRoutingModule,userComponents } from './user.routing';
import {FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms'; 
import {ReactiveFormsModule,FormsModule} from '@angular/forms'


@NgModule({
    imports : [UserRoutingModule,ReactiveFormsModule,FormsModule],
    declarations :[userComponents],
    exports : [userComponents]
})

export class UserModule { }