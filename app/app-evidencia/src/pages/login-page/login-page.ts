import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import { Toast } from 'ionic-native';
import { User } from '../../models/User';
import { UserService } from '../../providers/user-service';
import { BaseService } from '../../providers/base-service';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html',
  providers: [UserService, BaseService]
})
export class LoginPage {
public window:any;
public registrationForm:any;

  constructor(private userService: UserService, private formBuilder: FormBuilder, public platform: Platform) { }

  ionViewDidLoad() {
    this.registrationForm = this.formBuilder.group({
      Login: ['',Validators.required],
      Password: ['',Validators.required]
    });
  }

  authentication(){
    let user = <User> this.registrationForm.value;
    let res = this.userService.auth(user);

    if(res.success){
        //redirect
    }else{
      this.registrationForm.reset();
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
