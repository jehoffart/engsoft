import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-register-student-page',
  templateUrl: 'register-student-page.html'
})
export class RegisterUserPage {

public registrationForm:any;

  constructor(private formBuilder: FormBuilder) {}

  ionViewDidLoad() {
    this.registrationForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Age: ['',Validators.required],
      Email: ['',Validators.required],
      Street: ['',Validators.required],
      City: ['',Validators.required],
      State: ['',Validators.required],
      About: [''],
      Login: ['',Validators.required],
      Password: ['',Validators.required],
    });
  }
  logForm(){
    console.log(this.registrationForm.value)
  }
}
