import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: '../../../../views/user/login.component.html'
})

export class LoginComponent implements OnInit {

    public username: string;
    public password: string;
    public errorMsg = '';

    constructor(private _service: AuthenticationService) {
        this._service.logout();
    }

    ngOnInit() {}

    login() {
        this._service.login(this.username, this.password)
            .subscribe((login) => this.setLocalStorage(login));
    }

    setLocalStorage(auth) {
        if(!this._service.setLocalStorage(auth)) {
            this.errorMsg = "Usuário ou Senha inválidos";
        }
    }
}

