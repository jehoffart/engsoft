import {Model} from './model';
import {Problem} from './Problem';

export class Enterprise extends Model {
    _id: string;
    CNPJ:string;
    Name: string;
    Login: string;
    Password: string;
    Description: string;
    RegistrationDate: Date;
    Categories: [string];
    Website: string;
    Problems: [Problem];

    addCategory(category) {
        if(!this.Categories) this.Categories = [];
        this.Categories.push(category);
    }

    attributeNames: string[] = ['_id', 'CNPJ', 'Name', 'Login', 'Password', 'Description', 'RegistationDate', 
    'Categories', 'WebSite', 'Problems'];
}