import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {

public registrationForm:any;

  constructor(private formBuilder: FormBuilder) {}

  ionViewDidLoad() {
    this.registrationForm = this.formBuilder.group({
      Login: ['',Validators.required],
      Password: ['',Validators.required]
    });
  }
  logForm(){
    console.log(this.registrationForm.value)
  }
}
