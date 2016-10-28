import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html',
    providers: [ AuthenticationService ]
})
export class AppComponent { 
	constructor(public auth: AuthenticationService){}
}