import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
//import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { RoutingModule} from './routing/routing.module';
import { GridComponent } from './grid/grid.component';
import { DataService } from './data.service';
import { HttpClientModule , HttpClient  } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

   
  GridComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModule,
    HttpClientModule
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
