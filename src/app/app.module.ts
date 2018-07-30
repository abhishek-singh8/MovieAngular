import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent1Component } from './child-component1/child-component1.component';
import { ChildComponent2Component } from './child-component2/child-component2.component';
import { EmployeeServiceService } from './employee-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent1Component,
    ChildComponent2Component,
    SearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
