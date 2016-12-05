import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from "angular2-datatable";
import { ModalModule } from "ng2-modal";

import { AppComponent }   from './app.component';

import { ProblemListComponent } from './controllers/problem/list.component'; 
import { ProblemFormComponent } from './controllers/problem/form.component'; 
import { ProblemShowComponent } from './controllers/problem/show.component'; 

import { UserFormComponent } from './controllers/user/form.component'; 
import { UserShowComponent } from './controllers/user/show.component'; 

import { ProjectListComponent } from './controllers/project/list.component'; 
import { ProjectFormComponent } from './controllers/project/form.component'; 
import { ProjectShowComponent } from './controllers/project/show.component'; 

import { LoginComponent } from './controllers/user/login.component';

import { EnterpriseFormComponent } from './controllers/enterprise/form.component'; 
import { EnterpriseShowComponent } from './controllers/enterprise/show.component'; 

import { routing }  from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, routing, HttpModule, 
  				DataTableModule, ModalModule ], 
  declarations: [	
					AppComponent, 
					ProblemListComponent, ProblemFormComponent, ProblemShowComponent,
					ProjectListComponent, ProjectFormComponent, ProjectShowComponent,
					EnterpriseFormComponent, EnterpriseShowComponent,
					UserFormComponent, UserShowComponent, 
					LoginComponent
  				],
  bootstrap : [ AppComponent ]
})
export class AppModule { }