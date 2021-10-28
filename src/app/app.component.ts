import { Component, NgZone } from '@angular/core';
import { shareNgZone } from '@angular-architects/module-federation-tools';
import { Tab1Component } from './tab1/tab1.component';

interface TabObj {
  label: string,
  content: any,
  active: boolean,
  component: any
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular12-example';

  tabs: TabObj[] = [{ label: 'tab1', content: '<app-tab1></app-tab1>', active: true, component: Tab1Component },
  { label: 'tab2', content: 'tab2', active: false, component: null },
  { label: 'tab3', content: 'tab3', active: false, component: null }];


  constructor(private ngZone: NgZone) {
    shareNgZone(ngZone);
  }

  tabChanged($event) {
    console.log($event);

    for (const ttab of this.tabs) {
      ttab.active = false;
    }
    this.tabs[$event.index].active = true;
    console.log("#### tabs changed: " + this.tabs[$event.index].label + " - " + this.tabs[$event.index].active)
  }
}
