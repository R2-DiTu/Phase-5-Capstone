import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { OrderinfoComponent } from './orderinfo/orderinfo.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"movies",component:MoviesComponent},
  {path:"customer",component:CustomerdashboardComponent},

  {path:"admin",component:AdmindashboardComponent, children:[
    {path:"",component:MoviesComponent},
    {path:"orders",component:OrderinfoComponent}
  ]},
      
  {path:"login",redirectTo:"/",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
