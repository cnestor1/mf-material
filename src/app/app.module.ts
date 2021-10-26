import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { MatTabsModule } from '@angular/material/tabs';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';

@NgModule({
  declarations: [
    AppComponent,
    Tab1Component,
    Tab2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ModuleFederationToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
