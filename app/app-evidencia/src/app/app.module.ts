import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

//pages
import { ProblemPage } from '../pages/problem-page/problem-page';
import { ProjectPage } from '../pages/project-page/project-page';
import { RegisterStudentPage } from '../pages/register-student-page/register-student-page';
import { RegisterCompanyPage } from '../pages/register-company-page/register-company-page';

@NgModule({
  declarations: [
    MyApp,
    ProblemPage,
    ProjectPage,
    RegisterStudentPage,
    RegisterCompanyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProblemPage,
    ProjectPage,
    RegisterStudentPage,
    RegisterCompanyPage
  ],
  providers: []
})
export class AppModule {}
