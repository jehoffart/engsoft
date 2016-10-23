import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import { Toast } from 'ionic-native';
import { User } from '../../models/User';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {
public window:any;
public registrationForm:any;

  constructor(private formBuilder: FormBuilder, public platform: Platform) {}

  ionViewDidLoad() {
    this.registrationForm = this.formBuilder.group({
      Login: ['',Validators.required],
      Password: ['',Validators.required]
    });
  }

  authentication(){
    let user = <User> this.registrationForm.value;
    console.log(user);
    //aqui fazer a chamada a um método de autenticação da API
    //resetar form
    //this.registrationForm.reset();

  }

  showToast(message, position) {
    Toast.show(message, "short", position).subscribe(
    toast => {
        console.log(toast);
    }
 );
}

}
