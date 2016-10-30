import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import { Toast } from 'ionic-native';
import { User } from '../../models/User';
import { UserService } from '../../providers/user-service';
import { BaseService } from '../../providers/base-service';
import { StorageService} from '../../providers/storage-service';
import { ProblemPage } from '../problem-page/problem-page';
import { RegisterUserPage } from '../register-user-page/register-user-page';
import { RegisterEnterprisePage } from '../register-enterprise-page/register-enterprise-page';
import 'rxjs/Rx';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html',
  providers: [UserService, BaseService, StorageService]
})
export class LoginPage {
public registerUser = RegisterUserPage;
public registerEnterprise = RegisterEnterprisePage;
public window:any;
public registrationForm:any;
public token: string;

  constructor(public navCtrl: NavController, private storage: StorageService, private userService: UserService, private formBuilder: FormBuilder, public platform: Platform) {
    this.storage.getToken().then(
        data => this.token = data.tk,
        error => console.error(error)
      );
  }

  ionViewDidLoad() {
    this.registrationForm = this.formBuilder.group({
      Login: ['',Validators.required],
      Password: ['',Validators.required]
    });
  }

  authentication(){
    let user = <User> this.registrationForm.value;
    this.userService.auth(user).subscribe(res => {
      console.log(res);
      this.storeToken(res);
    });
  }

  storeToken(obj:any){
    if(obj.success){
      console.log("Sucesso");
      this.storage.insertToken(obj.token).then(
       () =>    {
                  this.showToast("Sucesso na autenticação","bottom");
                  this.navCtrl.push(ProblemPage);
                },
        error => console.error('Error storing item ', error)
      );
    }else{
      console.log("Falha");
      this.registrationForm.reset();
      this.showToast(obj.msg, "top");
    }
  }

  showToast(message, position) {
    Toast.show(message, "short", position).subscribe(
    toast => {
        console.log(toast);
    }
 );
}

}
