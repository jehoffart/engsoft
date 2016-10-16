import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

//pages
import { ProblemPage } from '../pages/problem-page/problem-page';
import { ProjectPage } from '../pages/project-page/project-page';
import { RegisterUserPage } from '../pages/register-user-page/register-user-page';
import { RegisterEnterprisePage } from '../pages/register-enterprise-page/register-enterprise-page';
import { LoginPage } from '../pages/login-page/login-page';

@NgModule({
  declarations: [
    MyApp,
    ProblemPage,
    ProjectPage,
    RegisterUserPage,
    RegisterEnterprisePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProblemPage,
    ProjectPage,
    RegisterUserPage,
    RegisterEnterprisePage,
    LoginPage
  ],
  providers: []
})
export class AppModule {}
