import { Component, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent.disp=false;
    console.log(this.appComponent.disp); // Access shared variable directly
  }
  ganesh()
  {
    this.appComponent.disp=false;
  }
}
