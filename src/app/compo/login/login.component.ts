import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { constant } from '../../Constants/constants';

@Component({
  selector: 'app-login',
  imports: [FormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  /*** login page se home page me static rit se ***/ 
  // userObj:any ={
  //   username: '',
  //   password: '',
  // }
  // router=inject(Router)
 
  // onlogin(){
    
  //   if(this.userObj.username == "admin" && this.userObj.password == "1234" ){
  //     alert("login successfully");
  //     localStorage.setItem('loginuser',this.userObj.username)
  //     this.router.navigateByUrl('view-child');
  //   }
  //   else{
  //     alert("invalid username or password");
  //   }
  // }


/*** login page se home page me API ki rit se ***/ 
  userObj:any ={
    EmailId: '',
    Password: '',
  }
  http =inject(HttpClient)
  router=inject(Router)

  onlogin(){     // costant hai o URL ke liya constant file se call kiya gaya hai 
    this.http.post( constant.API_URL,this.userObj).subscribe((res:any)=>{
      if(res.result){
        alert("login successfully");
        localStorage.setItem('loginuser',JSON.stringify(res.data))
        this.router.navigateByUrl('data-binding');
      }
      else{
        alert("invalid username or password");
        }

    })
   
}
}
