import { Injectable } from '@angular/core';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  islogin!: boolean;
  constructor() { }
  

  authUser(users:any){
    let userArr = [];
    let data ={
      userName:"admin",
      password:"admin"
    }
    this.islogin=true;
    localStorage.setItem('auth', JSON.stringify(data));


    if(localStorage.getItem('auth')){
      userArr = JSON.parse(localStorage.getItem('auth') || "");
      console.log(userArr);
      
    }
  
    const value =userArr.userName === users.userName.value && userArr.password === users.password.value;
    console.log(value);
    return value;
    // return userArr.find((p: { userName: any; password: any; }) => p.userName ===users.userName && p.password === users.password);


  }
  logout(){

  this.islogin=false;

  }
}
