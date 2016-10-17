import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ProblemListComponent } from './problem/list.component'; 
import { ProjectListComponent } from './project/list.component'; 
import { UserEditComponent } from './user/edit.component'; 
import { EnterpriseEditComponent } from './enterprise/edit.component'; 
import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ], //other modules the app depends on
  declarations: [ AppComponent, ProblemListComponent, ProjectListComponent, UserEditComponent,
  	EnterpriseEditComponent], // declare all derectives and components
  bootstrap : [ AppComponent ] // root component to bootstarp
})
export class AppModule { }