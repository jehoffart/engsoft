import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
//models
import { User } from '../../models/user';

import { UserService } from '../../providers/user-service';

import { LoginPage } from '../login-page/login-page';

/*
  Generated class for the UserPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-page',
  templateUrl: 'user-page.html',
  providers: [UserService]
})
export class UserPage {

  public userForm:FormGroup;
  public load:any;
  public user: User;

  constructor(private toastCtrl: ToastController ,public loadingCtrl:LoadingController, public navCtrl: NavController, public formBuilder:FormBuilder, public userService:UserService) {
    this.user = new User();
  }

  ionViewDidLoad() {
    console.log('Hello UserPage Page');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  save(){
    this.showLoad("Criando conta...");
    this.user = this.userForm.value;
    this.userService.addUser(this.user).subscribe(
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
    this.userForm.reset();
    this.showToast("Server error",3000,"top");

    return Observable.throw(error);
  }
  );
  }

  buildForm(){
    this.userForm = this.formBuilder.group({
      Name: [this.user.Name, Validators.required],
      Age: [this.user.Age,Validators.required],
      Email: [this.user.Email,Validators.required],
      Street: [this.user.Street,Validators.required],
      City: [this.user.City,Validators.required],
      State: [this.user.State,Validators.required],
      About: [this.user.About],
      Login: [this.user.Login,Validators.required],
      Password: [this.user.Password,Validators.required]
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
