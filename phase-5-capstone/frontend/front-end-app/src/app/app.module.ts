import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { SignupComponent } from './signup/signup.component';
import { CustomermoviesviewComponent } from './customermoviesview/customermoviesview.component';
import { OrderinfoComponent } from './orderinfo/orderinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    LoginComponent,
    AdmindashboardComponent,
    CustomerdashboardComponent,
    SignupComponent,
    CustomermoviesviewComponent,
    OrderinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
