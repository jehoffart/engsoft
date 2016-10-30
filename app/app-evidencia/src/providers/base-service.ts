import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BaseService{

private data:any;
private error:any;

constructor(private http:Http){}

    public getById(url:string, id:any) : any{
      return  this.http.get(url + id);
    }

    public get(url:string) : any{

      return this.http.get(url);

    }

    public post(url:string, data:any) : any{
      //console.log(data);
      //var options = {'Content-Type': ['application/json']};
        return this.http.post(url,data).map(res => res.json());
    }

    public put(url:string, data:any) : any{
        return this.http.put(url,data).map(res => res.json());
    }

    public delete(url:string) : any{
        return this.http.delete(url).map(res => res.json());
    }
}
