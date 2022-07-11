import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value = 'Clear me';
  userLogin:any;
 
//  @Input() searchText:any;

  constructor(private auth:AuthService,
    private route:Router) { }
  

  islogin = this.auth.islogin;

  onLogout(){
    alert("logout sucessfully");
    localStorage.removeItem('auth');
    this.route.navigate(['login']);
    this.auth.islogin = false;
  
    
  }


  ngOnInit(): void {
 
   if(localStorage.getItem('auth')){
    this.userLogin = true;
   }
  
   else{
    this.userLogin =false;

   }
   

    
   
  }
 // search(event :any){
   
    ///let k = event.charCode;
    // alert(k);

    // 32> k <47 || 58>k <64 || 91–96 ||123–126
// if(k>32 && k<47 || k>58 && k<64 ||k>91 && k<96 || k>123 && k<126)  {
 
  // this.route.navigate(['/', 'error']);

// }
// else{
  // alert(event);
 
// }

  //}















 




}
function inputValue(inputValue: any) {
  throw new Error('Function not implemented.');
}

