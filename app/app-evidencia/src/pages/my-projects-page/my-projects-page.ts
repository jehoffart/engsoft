import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectService } from '../../providers/project-service';
//import { Project } from '../../models/project';

/*
  Generated class for the MyProjectsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-projects-page',
  templateUrl: 'my-projects-page.html',
  providers : [ProjectService]
})
export class MyProjectsPage {

public problems : any;

  constructor(public navCtrl: NavController, private projectService : ProjectService) {
     this.projectService.getAllProjects().subscribe(respose => {
       console.log(respose);
       
        this.problems = respose;
        
     });
  }

  ionViewDidLoad() {
    console.log('Hello MyProjectsPage Page');
  }

  goToDetails(id : string)
  {

  }

}
