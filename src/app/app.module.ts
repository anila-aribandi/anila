import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlpracticeComponent } from './htmlpractice/htmlpractice.component';
import { PracticeComponent } from './practice/practice.component';
import { AnotherpracticeComponent } from './anotherpractice/anotherpractice.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlpracticeComponent,
    PracticeComponent,
    AnotherpracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
