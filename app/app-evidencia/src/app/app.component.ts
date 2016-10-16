import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

//pages
import { ProblemPage } from '../pages/problem-page/problem-page';
import { ProjectPage } from '../pages/project-page/project-page';
import { RegisterUserPage } from '../pages/register-user-page/register-user-page';
import { RegisterEnterprisePage } from '../pages/register-enterprise-page/register-enterprise-page';
import { LoginPage } from '../pages/login-page/login-page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProblemPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Problemas', component: ProblemPage },
      { title: 'Meus Projetos', component: ProjectPage },
      { title: 'Cadastro Aluno', component: RegisterUserPage },
      { title: 'Cadastro Empresa', component: RegisterEnterprisePage },
      { title: 'Login', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
