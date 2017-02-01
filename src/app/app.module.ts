import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { AppComponent } from './app.component';

import { RegisterService } from './auth/register/register.service';
import { LoginService } from './auth/login/login.service';


const appRoutes = [
   { path: 'auth/register', component: RegisterComponent },
   { path: 'auth/login', component: LoginComponent},
   { path: 'bucketlists', component: BucketlistComponent },
];

@NgModule({
  declarations: [
    AppComponent, RegisterComponent, BucketlistComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [RegisterService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
