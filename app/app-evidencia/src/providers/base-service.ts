import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BaseService{

private data:any;
private error:any;

constructor(private http:Http){}

    public getById(url:string, id:any){

    }

    public get(url:string) : any{

    return this.http.get(url);

    }

    public post(url:string, data:any) : any{
        return this.http.post(url,data).map(res => res.json());
    }

    public put(url:string, data:any){

    }

    public delete(url:string, data:any){

    }
}
