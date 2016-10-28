import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import { Toast } from 'ionic-native';
import { User } from '../../models/User';
import { UserService } from '../../providers/user-service';
import { BaseService } from '../../providers/base-service';
import { StorageService} from '../../providers/storage-service';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html',
  providers: [UserService, BaseService, StorageService]
})
export class LoginPage {
public window:any;
public registrationForm:any;
public token: string;

  constructor(private storage: StorageService, private userService: UserService, private formBuilder: FormBuilder, public platform: Platform) {
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
    let res = this.userService.auth(user);

    console.log(res);
  //  if(res.success){
  //    this.storage.insertToken(res.token).then(
    //    () =>    this.showToast("inseridooo","bottom"),
      //  error => console.error('Error storing item', error)
    //);
    //}else{
    //  this.registrationForm.reset();
    //  this.showToast(res.success, "top");
    //}

  }

  showToast(message, position) {
    Toast.show(message, "short", position).subscribe(
    toast => {
        console.log(toast);
    }
 );
}

}
