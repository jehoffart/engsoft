import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemListComponent } from './problem/list.component';
import { ProjectListComponent } from './project/list.component';
import { UserEditComponent } from './user/edit.component';
import { EnterpriseEditComponent } from './enterprise/edit.component';

const appRoutes: Routes = [
  { path: 'problem-list', component: ProblemListComponent },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'user-edit', component: ProjectListComponent },
  { path: 'enterprise-edit', component: EnterpriseEditComponent },
  { path: '', component: ProblemListComponent, pathMatch: 'full'} 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
