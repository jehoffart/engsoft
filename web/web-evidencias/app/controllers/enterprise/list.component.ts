import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Enterprise } from '../../models/enterprise';
import { EnterpriseService } from '../../services/enterprise.service';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'enterprise-list',
    templateUrl: '../../../../views/enterprise/list.component.html',
    providers: [ EnterpriseService, AuthenticationService ]
})
export class EnterpriseListComponent implements OnInit {
    enterprises: Enterprise[] = [];
    
    constructor(private _service: EnterpriseService, 
                private auth: AuthenticationService) {}

    ngOnInit() {
    	this.auth.checkCredentials();
        this._service.get().subscribe(enterprises => this.enterprises = enterprises);
    }
};