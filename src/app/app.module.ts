import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlpracticeComponent } from './htmlpractice/htmlpractice.component';
import { PracticeComponent } from './practice/practice.component';
import { AnotherpracticeComponent } from './anotherpractice/anotherpractice.component';
import { NewComponent } from './new/new.component';
import { AnotherComponent } from './another/another.component';
import { NewangularComponent } from './newangular/newangular.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { VisaDetailsComponent } from './visa-details/visa-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlpracticeComponent,
    PracticeComponent,
    AnotherpracticeComponent,
    NewComponent,
    AnotherComponent,
    NewangularComponent,
    HeaderComponent,
    NavigationComponent,
    CompanyDetailsComponent,
    EmployeeDetailsComponent,
    VisaDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
