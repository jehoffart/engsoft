import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ProblemListComponent } from './controllers/problem/list.component'; 
import { ProjectListComponent } from './controllers/project/list.component'; 
import { UserEditComponent } from './controllers/user/edit.component'; 
import { UserCreateComponent } from './controllers/user/create.component'; 
import { EnterpriseEditComponent } from './controllers/enterprise/edit.component'; 
import { LoginComponent } from './controllers/user/login.component'; 
import { routing }  from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, routing, HttpModule ], //other modules the app depends on
  declarations: [ AppComponent, ProblemListComponent, ProjectListComponent, UserEditComponent,
  				EnterpriseEditComponent, LoginComponent, UserCreateComponent ], // declare all derectives and components
  bootstrap : [ AppComponent ] // root component to bootstarp
})
export class AppModule { }