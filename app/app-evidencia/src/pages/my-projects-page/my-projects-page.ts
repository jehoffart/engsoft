import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageService } from '../../providers/storage-service';
import {ProjectService} from '../../providers/project-service';
import {Project} from '../../models/project';

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

public projects : any;

  constructor(public storage:StorageService, public navCtrl: NavController, projectService : ProjectService) {
    projectService.getAllProjects().subscribe((projs) =>
    {
        console.log(projs);
        this.projects = projs;
    });
   }

  ionViewDidLoad() {
    console.log('Hello MyProjectsPage Page');
  }

}
