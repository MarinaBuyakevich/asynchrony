import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BisComponent } from './bis/bis.component';

@NgModule({
  declarations: [
    AppComponent,
    BisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent , BisComponent]
})
export class AppModule { }
