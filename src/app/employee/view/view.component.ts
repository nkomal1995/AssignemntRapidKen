import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  displayedColumns: string[] = ['name','position','about', 'date'];
  // dataSource = new MatTableDataSource<PeriodicElement>(users);
  dataSource:any;
  
 
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('Users')){
      const users = JSON.parse(localStorage.getItem('Users') || "");
      console.log(users);
     this.dataSource =new MatTableDataSource<PeriodicElement>(users)
    
    }
    

 


  }
  

}


export interface PeriodicElement {
  name: string;
  position: string;
  about: string;
  date: any;
}
function item(item: any, any: any) {
  throw new Error('Function not implemented.');
}

function applyFilter(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly AT_TARGET: number; readonly BUBBLING_PHASE: number; readonly CAPTURING_PHASE: number; readonly NONE: number; }) {
  throw new Error('Function not implemented.');
}

