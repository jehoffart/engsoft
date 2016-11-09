import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
//models
import { Enterprise } from '../../models/enterprise';

import { EnterpriseService } from '../../providers/enterprise-service';

import { LoginPage } from '../login-page/login-page';

/*
Generated class for the EnterprisePage page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
  selector: 'page-enterprise-page',
  templateUrl: 'enterprise-page.html',
  providers: [EnterpriseService]
})
export class EnterprisePage {

  public enterpriseForm:FormGroup;
  public load:any;

  public enterprise: Enterprise;
  constructor(private toastCtrl: ToastController ,public loadingCtrl:LoadingController, public navCtrl: NavController, public formBuilder:FormBuilder, public enterpriseService:EnterpriseService) {
    this.enterprise = new Enterprise();
  }

  ionViewDidLoad() {
    console.log('Hello EnterprisePage Page');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  save(){
    this.showLoad("Criando conta...");
    this.enterprise = this.enterpriseForm.value;
    this.enterpriseService.addEnterprise(this.enterprise).subscribe(
      data => {
        if(data){
        console.log(data);
        this.showToast("Cadastrado com sucesso", 3000, "bottom");
        this.navCtrl.setRoot(LoginPage);
      }
    this.dismissLoad();
    console.log(data);
    return true;
  },
  error => {
    console.error("Error to save!");
    console.log(error);
    this.dismissLoad();
    this.enterpriseForm.reset();
    this.showToast("Server error",3000,"top");

    return Observable.throw(error);
  }
);
}

buildForm(){
  this.enterpriseForm = this.formBuilder.group({
    CNPJ: [this.enterprise.CNPJ, Validators.required],
    Name: [this.enterprise.Name,Validators.required],
    Login: [this.enterprise.Login,Validators.required],
    Password: [this.enterprise.Password,Validators.required],
    Description: [this.enterprise.Description,Validators.required],
    Categories: [this.enterprise.Categories, Validators.required],
    Website: [this.enterprise.Website,Validators.required]
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
