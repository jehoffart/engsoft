import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

export abstract class BaseController {
    
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service,
                protected entry: string) {}

	isLogged() {
		return localStorage.getItem('token') ? true : false;
	}

	havePermission() {
		if(!localStorage.getItem('token')){
			this.router.navigate(['login/']);
		}
	}

	logout() {
      localStorage.clear();
      this.router.navigate(['login/']);
  	}

	isEnterprise() {
		return localStorage.getItem('type') === "enterprise"
	}

	isUser() {
		return localStorage.getItem('type') === "user"
	}

	getLoginId() {
		return localStorage.getItem('loginId') ? localStorage.getItem('loginId') : '';
	}

}