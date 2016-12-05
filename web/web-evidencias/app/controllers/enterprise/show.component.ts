import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { Enterprise } from '../../models/Enterprise';
import { AuthenticationService } from '../../services/authentication.service';
import { ShowController } from './../showcontroller';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: '../../../../views/enterprise/show.component.html',
    providers: [ EnterpriseService, AuthenticationService ]
})
export class EnterpriseShowComponent extends ShowController implements OnInit {
    
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: EnterpriseService) {
      super(route, router, auth, _service, 'enterprise');
      this.model = new Enterprise();
    }

    ngOnInit() {
      this.GetModel();
    }

    GetModel() {
        this._service.getById(this.getLoginId()).subscribe(data => this.model = data);
    }

}