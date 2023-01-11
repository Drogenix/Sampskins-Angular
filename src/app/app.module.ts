import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './main/main.component';
import {RouterModule} from "@angular/router";
import {RoutingModule} from "./routing/routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    MainComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule, RoutingModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
