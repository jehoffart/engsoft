import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login-page/login-page';
import { EnterprisePage } from '../pages/enterprise-page/enterprise-page';
import { UserPage } from '../pages/user-page/user-page';
import { ProjectPage } from '../pages/project-page/project-page';
import { ProblemPage } from '../pages/problem-page/problem-page';
import { MyProjectsPage } from '../pages/my-projects-page/my-projects-page';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StorageService } from '../providers/storage-service';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    EnterprisePage,
    UserPage,
    ProjectPage,
    ProblemPage,
    MyProjectsPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    EnterprisePage,
    UserPage,
    ProjectPage,
    ProblemPage,
    MyProjectsPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [StorageService]
})
export class AppModule {}
