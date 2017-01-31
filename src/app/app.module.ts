import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { AppComponent } from './app.component';

const appRoutes = [
   { path: 'auth/register', component: RegisterComponent },
   { path: 'auth/login', component: RegisterComponent},
   { path: 'bucketlists', component: BucketlistComponent },
];

@NgModule({
  declarations: [
    AppComponent, RegisterComponent, BucketlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
