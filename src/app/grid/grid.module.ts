import { NgModule} from '@angular/core';
import { GridComponent } from './grid.component';
import { Routes, RouterModule } from '@angular/router';

const gridRoute : Routes =[{path : 'grid', component :GridComponent }];

@NgModule ({
    imports: [RouterModule.forChild(gridRoute)],
    exports: [GridComponent],
    declarations :[GridComponent]
})

export class GridModule { }