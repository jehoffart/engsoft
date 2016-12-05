import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [

  { path: 'problem', component: ProblemListComponent },
  { path: 'problem/form', component: ProblemFormComponent },
  { path: 'problem/form/:id', component: ProblemFormComponent },
  { path: 'problem/show/:id', component: ProblemShowComponent },
  
  { path: 'project', component: ProjectListComponent },
  { path: 'project/form', component: ProjectFormComponent },
  { path: 'project/form/:id', component: ProjectFormComponent },
  { path: 'project/show/:id', component: ProjectShowComponent }, 
  
  { path: 'user', component: UserShowComponent },
  { path: 'user/form', component: UserFormComponent },
 
  { path: 'login', component: LoginComponent },
 
  { path: 'enterprise', component: EnterpriseShowComponent },
  { path: 'enterprise/form', component: EnterpriseFormComponent },
  { path: 'enterprise/form/:id', component: EnterpriseFormComponent },

  { path: '', component: ProblemListComponent, pathMatch: 'full'} 
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
