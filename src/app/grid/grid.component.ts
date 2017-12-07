import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';


//import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

   public users :any;

  //  public array:any;
  constructor(private dataService :DataService) {
    this.getUserData();
  // this.curPage = 1;
  // this.pageSize = 3; 
   }

   
  //form control
//  search = new FormControl();

public getUserData() {
    this.dataService.getData()
      .subscribe(data => this.users = data);
  }
  ngOnInit() {
  }
//sorting
key: string = 'name'; //set default
reverse: boolean = false;
sort(key){
  this.key = key;
  this.reverse = !this.reverse;
}
// pagination
// curPage : number;
//  pageSize : number;

//  numberOfPage(){
//  console.log(this.users.length);
//   return Math.ceil(this.users.length / this.pageSize);

//  }
//  sortTable(users) {
  
//                   if (users.sortOrder == 'asc') {
//                     users.sort(function (a, b) {
//                           return a > b ? -1 : 1;
//                       });
//                       users.sortOrder = 'desc';
//                   } else {
//                     users.sort(function (a, b) {
//                           return a < b ? -1 : 1;
//                       });
  
//                       users.sortOrder = 'asc';
//                   }
  
  
//               }
 }


