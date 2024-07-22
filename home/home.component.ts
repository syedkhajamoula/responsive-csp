import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loader = true;
  ngOnInit():void{

    setTimeout(()=>{
      this.loader = false;
    },3000);
  }

}
