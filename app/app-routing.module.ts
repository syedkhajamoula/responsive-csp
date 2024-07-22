import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RentalComponent } from './rental/rental.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { first } from 'rxjs';
import { FirstComponent } from './first/first.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{

  path:'home',
  component:HomeComponent
},
{
  path:'rental',
  component:RentalComponent
},
{path:'sales',
component:SalesComponent
},
{
  path:'login',
  component:LoginComponent
  
},
{
  path:'aboutus',
  component:AboutusComponent
},
{
  path:'contactus',
  component:ContactusComponent
},
{
  path:'',
  component:FirstComponent
},
{
  path:'main',
  component:MainComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
