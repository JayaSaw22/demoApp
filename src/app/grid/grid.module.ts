import { NgModule} from '@angular/core';
import { GridComponent } from './grid.component';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { CategoryPipe } from '../pipe/category.pipe';

const gridRoute : Routes =[{path : 'grid', component :GridComponent }];

@NgModule ({
    imports: [ReactiveFormsModule,FormsModule,RouterModule.forChild(gridRoute)],
    exports: [GridComponent],
    declarations :[GridComponent]
})

export class GridModule { }