import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
//models
import { Problem } from '../../models/problem';

import { ProblemService } from '../../providers/problem-service';

import { MyProjectsPage } from '../my-projects-page/my-projects-page'

/*
  Generated class for the ProblemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-problem-page',
  templateUrl: 'problem-page.html',
  providers: [ProblemService]
})
export class ProblemPage {
  public problemForm:FormGroup;
  public load:any;
  public problem: Problem;

  constructor(private toastCtrl: ToastController ,public loadingCtrl:LoadingController, public navCtrl: NavController, public formBuilder:FormBuilder, public problemService:ProblemService) {
    this.problem = new Problem();
  }

  ionViewDidLoad() {
    console.log('Hello ProblemPage Page');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  addCategories(category:any){
    this.problemForm.value.Categories.push(category.value);
    category.value = '';
  }

  save(){
    this.showLoad("Criando problema...");
    this.problem = this.problemForm.value;
    console.log(this.problem);
    this.problemService.addProblem(this.problem).subscribe(
      data => {
        if(data){
        console.log(data);
        this.showToast("Problema criado", 3000, "bottom");
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
    this.problemForm.reset();
    this.showToast("Server error",3000,"top");

    return Observable.throw(error);
  }
  );
  }

  buildForm(){
    this.problemForm = this.formBuilder.group({
      Name: [this.problem.Name, Validators.required],
      Description: [this.problem.Description,Validators.required],
      MaxCost: [this.problem.MaxCost,Validators.required],
      Categories: [this.problem.Categories,Validators.required],
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
