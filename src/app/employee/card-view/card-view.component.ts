import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {


  item:any;
 
  constructor(private route:Router,auth:AuthService,private dialogRef : MatDialog) { }

  ngOnInit(): void {
   
  }

  
 users = JSON.parse(localStorage.getItem('Users') || "");




openDialog(){

  this.users.forEach((element: {
    name: any; 
    position: any;
    about: string;
    date: Date;
  
   
}) => {
  this.dialogRef.open(PopUpComponent,{
    data : {
      name : element.name ,
 
     position : element.position,
     about : element.about,
     date : element.date

       }
  });

});
}


 delete(item:any){
  

alert("Are you sure to delecte record");
const  users = JSON.parse(localStorage.getItem('Users') || "");
  this. users.splice(item, 1);
   users.localStorage.removeItem(item);
   
}






}
