import { Component, OnInit } from '@angular/core';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

    constructor() { }
    items: WebComponentWrapperOptions[] = [
      // {
      //   remoteEntry: 'http://localhost:4220/remoteEntry.js',
      //   remoteName: 'logmsgml',
      //   exposedModule: './web-components',
      //   elementName: 'logmsgml-element'
      // },
      {
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        remoteName: 'mfe4',
        exposedModule: './web-components',
        elementName: 'mfe4-element'
      },
      // {
      //   remoteEntry: 'http://localhost:4203/remoteEntry.js',
      //   remoteName: 'mfe3',
      //   exposedModule: './web-components',
      //   elementName: 'mfe3-element'
      // },
      {
        remoteEntry: 'http://localhost:4212/remoteEntry.js',
        remoteName: 'angular1',
        exposedModule: './web-components',
        elementName: 'angular1-element'
      },
      {
        remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angular3',
        exposedModule: './web-components',
        elementName: 'angular3-element'
      }
      
    ];

  ngOnInit(): void {
  }

}
