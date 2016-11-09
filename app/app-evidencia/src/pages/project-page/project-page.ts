import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
//models
import { Project } from '../../models/project';

import { ProjectService } from '../../providers/project-service';

import { MyProjectsPage } from '../my-projects-page/my-projects-page'

/*
  Generated class for the ProjectPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-project-page',
  templateUrl: 'project-page.html',
  providers: [ProjectService]
})
export class ProjectPage {
  public projectForm:FormGroup;
  public load:any;
  public project: Project;

  constructor(private toastCtrl: ToastController ,public loadingCtrl:LoadingController, public navCtrl: NavController, public formBuilder:FormBuilder, public projectService:ProjectService) {
    this.project = new Project();
  }

  ionViewDidLoad() {
    console.log('Hello ProjectPage Page');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  addCategories(category:any){
    this.projectForm.value.Categories.push(category.value);
    category.value = '';
  }

  save(){
    this.showLoad("Criando projeto...");
    this.project = this.projectForm.value;
    console.log(this.project);
    this.projectService.addProject(this.project).subscribe(
      data => {
        if(data){
        console.log(data);
        this.showToast("Projeto criado", 3000, "bottom");
        this.navCtrl.setRoot(MyProjectsPage);
      }
    this.dismissLoad();
    console.log(data);
    return true;
  },
  error => {
    console.error("Error to save!");
    console.log(error);
    this.dismissLoad();
    this.projectForm.reset();
    this.showToast("Server error",3000,"top");

    return Observable.throw(error);
  }
  );
  }

  buildForm(){
    this.projectForm = this.formBuilder.group({
      Name: [this.project.Name, Validators.required],
      Description: [this.project.Description,Validators.required],
      Status: [this.project.Status,Validators.required],
      Cost: [this.project.Cost, Validators.required],
      Categories: [this.project.Categories],
      Team: [this.project.Team]
    });
  }

  showLoad(msg:string) {
    this.load = this.loadingCtrl.create({
      dismissOnPageChange: true,
      content: msg
    });
    this.load.present();
  }
  dismissLoad(){
    this.load.dismiss();
  }
  showToast(msg:string, time:number, pos:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: time,
      position: pos
    });
    toast.present();
  }

}
