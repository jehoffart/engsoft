import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from "angular2-datatable";
import { ModalModule } from "ng2-modal";

import { AppComponent }   from './app.component';

import { ProblemListComponent } from './controllers/problem/list.component'; 
import { ProblemCreateComponent } from './controllers/problem/create.component'; 
import { ProblemEditComponent } from './controllers/problem/edit.component'; 
import { ProblemShowComponent } from './controllers/problem/show.component'; 

import { ProjectListComponent } from './controllers/project/list.component'; 
import { ProjectCreateComponent } from './controllers/project/create.component'; 
import { ProjectEditComponent } from './controllers/project/edit.component'; 
import { ProjectShowComponent } from './controllers/project/show.component'; 

import { UserEditComponent } from './controllers/user/edit.component'; 
import { UserCreateComponent } from './controllers/user/create.component'; 
import { UserShowComponent } from './controllers/user/show.component';

import { LoginComponent } from './controllers/user/login.component';

import { EnterpriseListComponent } from './controllers/enterprise/list.component';
import { EnterpriseCreateComponent } from './controllers/enterprise/create.component';
import { EnterpriseEditComponent } from './controllers/enterprise/edit.component';
import { EnterpriseShowComponent } from './controllers/enterprise/show.component';

import { routing }  from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, routing, HttpModule, 
  				DataTableModule, ModalModule ], 
  declarations: [ AppComponent, 
				ProblemListComponent, ProblemCreateComponent, ProblemEditComponent, ProblemShowComponent,
				ProjectListComponent, ProjectCreateComponent, ProjectEditComponent, ProjectShowComponent,
				EnterpriseListComponent, EnterpriseCreateComponent, EnterpriseEditComponent, EnterpriseShowComponent,
				UserEditComponent, UserCreateComponent, UserShowComponent, 
				LoginComponent
  				],
  bootstrap : [ AppComponent ]
})
export class AppModule { }