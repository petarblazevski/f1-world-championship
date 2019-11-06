import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule {}
