import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseController } from './controllers/basecontroller';

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html',
    providers: [ AuthenticationService ]
})
export class AppComponent extends BaseController { 
	
	constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService) {
        super(route, router, auth, undefined, '');
    }

}