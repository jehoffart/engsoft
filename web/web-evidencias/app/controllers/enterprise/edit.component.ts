import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {Enterprise} from '../../models/Enterprise';
import { EnterpriseService } from '../../services/enterprise.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'enterprise-edit',
	templateUrl: '../../../../views/enterprise/form.component.html',
	providers: [ EnterpriseService ]
})
export class EnterpriseEditComponent implements OnInit {
    enterprise: Enterprise = new Enterprise;
    
    _route : ActivatedRoute;
	_router : Router;
    
    constructor(private _service: EnterpriseService, route: ActivatedRoute, router: Router) {
    	this._route = route;
    	this._router = router;
    };

    ngOnInit() {
      	/*this.enterprise = this._route.params
      		.map(params => params.id)
			.mergeMap((id) => {
	        	return this._service.getById(id);
      		});*/
    }
}
