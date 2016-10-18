import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemListComponent } from './controllers/problem/list.component';
import { ProjectListComponent } from './controllers/project/list.component';
import { UserEditComponent } from './controllers/user/edit.component';
import { EnterpriseEditComponent } from './controllers/enterprise/edit.component';
import { LoginComponent } from './controllers/user/login.component';
import { UserCreateComponent } from './controllers/user/create.component';

const appRoutes: Routes = [
  { path: 'problem-list', component: ProblemListComponent },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'enterprise-edit', component: EnterpriseEditComponent },
  { path: '', component: ProblemListComponent, pathMatch: 'full'} 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
