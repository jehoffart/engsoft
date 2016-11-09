import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
//models
import { Login } from '../../models/login';
//providers
import { LoginService } from '../../providers/login-service';
import { StorageService } from '../../providers/storage-service';
import { UserPage } from '../../pages/user-page/user-page';
import { EnterprisePage } from '../../pages/enterprise-page/enterprise-page';
import { MyProjectsPage } from '../../pages/my-projects-page/my-projects-page';
/*
Generated class for the LoginPage page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
  providers: [LoginService]
})
export class LoginPage {

  public login:Login;
  public loginForm:FormGroup;
  public load:any;
  public enterprise:any;
  public user:any;

  constructor(public storage:StorageService, private toastCtrl: ToastController ,public loadingCtrl:LoadingController, public navCtrl: NavController, public formBuilder:FormBuilder, public loginService:LoginService) {
    this.login = new Login();
    this.enterprise = EnterprisePage;
    this.user = UserPage;
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  authentication(){
    this.showLoad("Autenticando...");
    this.login = this.loginForm.value;
    this.loginService.auth(this.login).subscribe(
      data => {
        if(data.success){
          console.log(data);
          this.showToast("Logged with success", 3000, "bottom");

          this.storage.setSession(data).then(
            () => {this.navCtrl.setRoot(MyProjectsPage);},
            error => {this.showToast("Erro ao armazenar sessão",3000,"top");}
          );
        }else{
          this.showToast("Login ou senha incorreta",3000,"top");
          this.loginForm.reset();
        }
        //show Toast
        this.dismissLoad();
        return true;
      },
      error => {
        console.error("Error authentication!");
        this.dismissLoad();
        this.loginForm.reset();
        this.showToast("Server error",3000,"top");
        return Observable.throw(error);
      }
    );
  }

  buildForm(){
    this.loginForm = this.formBuilder.group({
      Login: [this.login.Login,Validators.required],
      Password: [this.login.Password,Validators.required]
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
