import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

   public users :any;

  constructor(private dataService :DataService) {
    this.getUserData();
   }

public getUserData() {
    this.dataService.getData()
      .subscribe(data => this.users = data);
  }
  ngOnInit() {
  }

}
