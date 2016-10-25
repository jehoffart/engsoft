import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [
  { path: 'problem-list', component: ProblemListComponent },
  { path: 'problem-edit/:id', component: ProblemEditComponent },
  { path: 'problem-create', component: ProblemCreateComponent },
  { path: 'problem-show/:id', component: ProblemShowComponent },
  
  { path: 'project-list', component: ProjectListComponent },
  { path: 'project-edit/:id', component: ProjectEditComponent },
  { path: 'project-create', component: ProjectCreateComponent },
  { path: 'project-show/:id', component: ProjectShowComponent }, 

  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'user-show/:id', component: UserShowComponent },
  { path: 'user-create', component: UserCreateComponent },
 
  { path: 'login', component: LoginComponent },
 
  { path: 'enterprise-list', component: EnterpriseListComponent },
  { path: 'enterprise-edit/:id', component: EnterpriseEditComponent },
  { path: 'enterprise-create', component: EnterpriseCreateComponent },
  { path: 'enterprise-show/:id', component: EnterpriseShowComponent },

  { path: '', component: ProblemListComponent, pathMatch: 'full'} 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
