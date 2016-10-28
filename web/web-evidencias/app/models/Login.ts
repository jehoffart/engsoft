import { Model } from './model';

export class Login extends Model {
    _id: string;
    success:string;
    token: string;
    type: string;
    loginId: string;
    
    attributeNames: string[] = ['_id', 'success', 'token', 'type', 'loginId'];
}