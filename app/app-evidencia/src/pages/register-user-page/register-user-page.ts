import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import{ UserService } from '../../providers/user-service';
import {BaseService} from '../../providers/base-service';

import {User} from '../../models/User';

@Component({
  selector: 'page-register-user-page',
  templateUrl: 'register-user-page.html',
  providers: [UserService, BaseService]
})
export class RegisterUserPage {

public registrationForm:any;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    var user = new User();
    user.Name = "Guilherme Dimarchi";
    user.Age = "22";
    user.Email = "gui@gui.com";
    user.City = "Sorocaba";
    user.State = "SP";
    user.Street = "Rua x";
    user.About = "Descricao/curriculo";
    user.Password =  "senhacriptografada";
    user.RegistrationDate = "2016-10-15T22:02:08.107Z";
    console.log(user);
    console.log(JSON.stringify(user));
    //userService.post(user);
    //userService.get();
  }

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
      RegistrationDate: [new Date()]
    });
  }
  logForm(){
    console.log(this.registrationForm.value)
  }
}
