import { SplashScreenService } from './core/services/splash-screen.service';
import { Component, ViewEncapsulation } from '@angular/core';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private splashScreenService: SplashScreenService) {   
  }
}
