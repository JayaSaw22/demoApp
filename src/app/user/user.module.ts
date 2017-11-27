import {NgModule} from '@angular/core';
import { UserRoutingModule,userComponents } from './user.routing';

@NgModule({
    imports : [UserRoutingModule],
    declarations :[userComponents],
    exports : [userComponents]
})

export class UserModule { }