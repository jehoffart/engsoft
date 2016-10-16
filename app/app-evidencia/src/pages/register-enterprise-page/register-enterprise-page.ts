import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'page-register-enterprise-page',
  templateUrl: 'register-enterprise-page.html'
})
export class RegisterEnterprisePage {

  public registrationForm:any;

    constructor(private formBuilder: FormBuilder) {}

    ionViewDidLoad() {
      this.registrationForm = this.formBuilder.group({
        CNPJ: ['', Validators.required],
        Name: ['',Validators.required],
        Login: ['',Validators.required],
        Password: ['',Validators.required],
        Description: ['',Validators.required],
        Categories: ['', Validators.required],
        Website: ['',Validators.required],
        RegistrationDate: [new Date()]
      });
    }
    logForm(){
      console.log(this.registrationForm.value)
    }

}
