import { Component } from '@angular/core';
import { Config } from './config.service'
import { User } from './auth/register/register';
import { BucketlistComponent } from './bucketlist/bucketlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = Config.heading;
}
