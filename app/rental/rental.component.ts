import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { InsertedSuccess, Read, StudentDetails } from '../group';



@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  template: `
  <img [src]="myPix[randomNumber]" />
`,
  styleUrls: ['./rental.component.css']
})



export class RentalComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private Service: LoginService) {}
  Roll: String = '';
  GotResult: Boolean = false;
  UpdatedUser: StudentDetails = {
    Name:'',
    Gender:'',
    Email:'',
    Category:'',
    Address:'',
    City:'',
    State:'',
    Mobile:''

  };
  Results = [];
  Resuits2 = [];
  a=[];
  Read(Category: String) {
    this.Service.Read(Category).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Read1(Category: String) {
    this.Service.Read(Category).subscribe({
      next: (Data: Read) => {
        this.Resuits2 = Data.Result;
        this.GotResult = true;
        for(let i=0; i<this.Resuits2.length; i++){
          this.a=this.Resuits2[i];
        }
        console.log(this.a);
          this.UpdatedUser.Name=this.a[0];
          this.UpdatedUser.Gender=this.a[1];
          this.UpdatedUser.Email=this.a[2];
          this.UpdatedUser.Category=this.a[3];
          this.UpdatedUser.Address=this.a[4];
          this.UpdatedUser.City=this.a[5];
          this.UpdatedUser.State=this.a[6];
          this.UpdatedUser.Mobile=this.a[7];
          

        
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(Category: String, Details: StudentDetails) {
    this.Service.Update(this.UpdatedUser.Category, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(Name: String) {
    this.Service.Delete(Name).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }

  readonly myPix = [
    
    'assets/rent/h7.jpg',
    'assets/rent/h8.jpg',
    'assets/rent/h9.jpg',
    'assets/rent/h10.jpg',
    'src/assets/rent/h1.jpg',
    'assets/rent/h5.jpg',
    'assets/rent/h2.jpg',
    'assets/rent/h3.jpg',
    'assets/rent/h4.jpg',
    'assets/rent/h5.jpg',
   
  ]
  randomNumber = Math.floor(Math.random() * this.myPix.length);
}