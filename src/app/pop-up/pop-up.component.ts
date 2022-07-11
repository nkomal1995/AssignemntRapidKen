import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  // constructor() { }

  name;
  position;
  about;
  date;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private dialogRef : MatDialog,private route:Router, private auth:AuthService,) {
    this.name = data.name,
    this.position = data.position,
    this.about = data.about,
    this.date = data.date
    console.log(this.name);
    
  }


  myRegis = new FormGroup({
    
    name: new FormControl('',[Validators.required]),
    position: new FormControl('',[Validators.required]),
    about: new FormControl('',Validators.required),
    date: new FormControl('',[Validators.required])
  });
 

  
 
//   this.myRegis.setValue({  
   
// });  
 

  ngOnInit(): void {
  
  this.myRegis.setValue({  
    name:this.name,
    position:this.position,
    about:this.about,
    date:this.date


   
});
  }

  onUpdate(){

    if(this.auth.islogin){

    const  users = JSON.parse(localStorage.getItem('Users') || "");
    let data ={
      name:this.myRegis.controls.name,
      position:this.myRegis.controls.position,
      about:this.myRegis.controls.about,
      date:this.myRegis.controls.date
    }

    
    localStorage.setItem('Users', JSON.stringify(data));
   
    
    }
    else{
      alert("please login");
      this.route.navigate(['/','login']);
    }
    


  }

  onCancel(){
    this.dialogRef.closeAll();

  }
        
}
