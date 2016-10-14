import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProblemPage } from '../pages/problemPage/problemPage';
import { ProjectPage } from '../pages/projectPage/projectPage';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ProblemPage,
    ProjectPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ProblemPage,
    ProjectPage
  ],
  providers: []
})
export class AppModule {}
