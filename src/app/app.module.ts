import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { JsonpComponent } from './jsonp/jsonp.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
