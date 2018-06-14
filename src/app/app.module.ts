import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HttpClient, HttpResponse, HttpRequest, HttpHeaders, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
