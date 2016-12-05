import { BaseController } from './basecontroller';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

export abstract class ListController extends BaseController {
    protected list;

    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service, 
                protected entry: string) {
      super(route, router, auth, _service, entry);
    }

    GetList() {
      this._service.get().subscribe(data => this.list = data);
    }

    Delete(id) {
      this._service.delete(id).subscribe((data) => {
         this.GetList();
      });
    }
}