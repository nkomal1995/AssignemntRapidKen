import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
user:any ={};
  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

  get form () { return this.myRegis.controls; }
  
  myRegis = new FormGroup({
    
    name: new FormControl('',[Validators.required]),
    position: new FormControl('',[Validators.required]),
    about: new FormControl('',Validators.required),
    date: new FormControl('',[Validators.required])
  });


onSubmit(){
  console.log(this.myRegis.value);
  this.user = Object.assign(this.user,this.myRegis.value);
  this.addUser(this.user);
  this.myRegis.reset();
  alert("Registration sucesssfully");
  this.router.navigate(['/', 'listView']);


}


addUser(user: any){
  let users = [];
 

  if(localStorage.getItem('Users')){
   users = JSON.parse(localStorage.getItem('Users') || "");
    users = [user,...users];

  }
  else{
    users = [user];
  }
  localStorage.setItem('Users', JSON.stringify(users));
  



}

  
}
function dis() {
  throw new Error('Function not implemented.');
}

