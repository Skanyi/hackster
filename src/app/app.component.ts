import { Component } from '@angular/core';
import { Config } from './config.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = Config.heading;
}
