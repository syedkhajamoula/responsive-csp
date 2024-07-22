import { Component,OnInit, OnDestroy} from '@angular/core';
import {
  InsertedSuccess,
  Contact,
  UniqueConstraintError,
} from '../group';
import { Subscription } from 'rxjs';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit,OnDestroy{
  constructor(private Service: ContactService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  UpdatedUser: Contact= {
    Name: '',
    Email:'',
    Subject:'',
    Message:'',
    

  };
  SuccessMsg = '';
  SuccessMsg1 = '';

  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.SuccessMsg1 = '';
    

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

    this.Subscription = this.Service.Insert(this.UpdatedUser).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.UpdatedUser.Name} alredy Exists`;
        } else {
          this.SuccessMsg = `Your Valuable Message Send Succesfully`;
          this.SuccessMsg1 = `Thanks For Visiting ContactUs`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}