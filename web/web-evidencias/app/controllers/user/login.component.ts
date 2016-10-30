import {Component} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: '../../../../views/user/login.component.html'
})

export class LoginComponent {

    public username: string;
    public password: string;
    public errorMsg = '';

    constructor(private _service: AuthenticationService) {}

    login() {
        this._service.logout();
        if(!this._service.login(this.username, this.password)){
            this.errorMsg = 'Failed to login';
        }
    }
}

