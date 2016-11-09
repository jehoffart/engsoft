import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageService } from '../../providers/storage-service';
import {ProjectService} from '../../providers/project-service';
import {Project} from '../../models/project';
import {Observable} from 'rxjs/Rx';
/*
Generated class for the MyProjectsPage page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-projects-page',
  templateUrl: 'my-projects-page.html',
  providers: [ProjectService]
})
export class MyProjectsPage {

public projects: Project[];

  constructor(public storage:StorageService, public navCtrl: NavController, public projectService : ProjectService) {
    this.storage.getSession().then(
      data => {
        projectService.operator = data.operator;
        this.getProjectsByUser();
      },
      error => console.error(error)
    );

   }

  ionViewDidLoad() {
    console.log('Hello MyProjectsPage Page');
  }

  getProjectsByUser(){
    this.projectService.getProjectsByUser().subscribe(
      projs => {
        this.projects = projs;
    },
    error => {
      return Observable.throw(error);
    });
  }

}
