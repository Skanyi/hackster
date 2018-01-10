import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from './config.service'
import { User } from './auth/register/register';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { LoginService } from './auth/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: string;

  constructor(
    private loginService: LoginService,
    private router: Router){}

  title = Config.heading;

  getUser() {
    this.currentUser = localStorage.getItem('username');
    return this.currentUser;

  }

}
