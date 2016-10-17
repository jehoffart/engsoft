import{ User } from './user';
import{ http } from '../../node_modules/http-signature/package';
export class BasicDao{

  private urlInsertUser:string;

  constructor(){
    this.urlInsertUser = "http://localhost:3000/user";
  }

  public insertUser(user:User):void{
    http.post
  }

}
