import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  StudentDetails,
  UniqueConstraintError,
  login,
} from '../save';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SevenService } from '../seven.service';

import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
 

  constructor(private Service: SevenService, private router: Router) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: StudentDetails = {
    password: '',
    email: '',
    roll:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  showpassword=false;

toggleshow(){
  this.showpassword=!this.showpassword;
}
display()
{
  
}
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} Already Exists`;
        } else {
          this.SuccessMsg = `${this.User.email} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  login(){
    
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }



  a=[]
  pass:string='';
  username:string='';
  Doctor:login={
  email:'',
  password:''
  }
  Read(){
    this.pass=this.Doctor.password;
    this.username=this.Doctor.email;
    this.Subscription=this.Service.ulogin(this.Doctor.email).subscribe(
      (data:any)=>{
        if(data){
          this.a=data.Result[0];
          this.Doctor={
            email:this.a[0],
            password:this.a[1]
          }
          if(this.username==this.Doctor.email && this.pass==this.Doctor.password )
          {
            this.router.navigate(['/home']);
          }
          else{
            this.router.navigate(['/login']);
            alert("Please Enter ,Your Correct Login Credentials")
          }
      }
        else{
         alert("Can't login incorrect password or email");
        }
      }
    )
  }
}




