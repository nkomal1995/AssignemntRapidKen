import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 //islogin: boolean = false;
  // userName: string ="admin";
  // password: string = "admin";

  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
  
  }
  myForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });


  login(){

   const user =this.authService.authUser(this.myForm.controls);
   if(user){
    console.log("login sucessfully");
    alert("login sucessfully");
    this.route.navigate(['/','listView']);
    
    


   }

   else{
    alert("Please enter right credential");

   }
    
  

 
  }

}
