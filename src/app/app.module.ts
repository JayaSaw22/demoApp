import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
//import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';

//import { LoginComponent } from './user/login/login.component';
import { SearchPipe } from './grid/search.pipe';

import { GridComponent } from './grid/grid.component';
import { DataService } from './services/data.service';
import { HttpClientModule , HttpClient  } from '@angular/common/http';
import { SortPipe } from './grid/sort.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { PagingPipe } from './pagination/paging.pipe';





@NgModule({
  declarations: [
    AppComponent,
 
   GridComponent,
   SearchPipe,
   SortPipe,
   PaginationComponent,
   PagingPipe,
  
  
 
  
 
  ],
  imports: [
    BrowserModule,

    FormsModule,

    HttpClientModule
  
  ],
  providers: [DataService],
   bootstrap: [AppComponent]
})
export class AppModule { }
