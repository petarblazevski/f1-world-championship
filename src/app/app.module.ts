import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule {}
