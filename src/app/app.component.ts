import { Component, NgZone } from '@angular/core';
import { shareNgZone } from '@angular-architects/module-federation-tools';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular12-example';
  
  constructor(private ngZone: NgZone) {
    shareNgZone(ngZone);
  }
}
