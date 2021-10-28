import { Component, OnInit } from '@angular/core';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  constructor() { }

  events = {
    "clicked": (event: any) => {
      console.debug('clicked!', event);
    }
  }

  items: WebComponentWrapperOptions[] = [
    {
      remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    },
    {
      remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular3',
      exposedModule: './web-components',
      elementName: 'angular3-element'
    },
    {
    remoteEntry: 'http://localhost:4203//remoteEntry.js',
    remoteName: 'mfe3',
    exposedModule: './web-components',
    elementName: 'mfe3-element'
  },
    {
      remoteEntry: 'https://calm-mud-0a3ee4a10.azurestaticapps.net//remoteEntry.js',
      remoteName: 'angularjs',
      exposedModule: './web-components',
      elementName: 'angularjs-element'
    },
    {
      // Logmsgml
      remoteEntry: 'http://localhost:4220/remoteEntry.js',
      remoteName: 'logmsgml',
      exposedModule: './web-components',
      elementName: 'logmsgml-element'
    }
  ];

  ngOnInit(): void {
  }

}
