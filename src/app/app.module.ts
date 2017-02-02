import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RegisterService } from './auth/register/register.service';
import { LoginService } from './auth/login/login.service';


const appRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'auth/register', component: RegisterComponent },
   { path: 'auth/login', component: LoginComponent},
   { path: 'bucketlists', component: BucketlistComponent },
   { path: '**', redirectTo: '/', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent, RegisterComponent, BucketlistComponent, LoginComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [RegisterService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
