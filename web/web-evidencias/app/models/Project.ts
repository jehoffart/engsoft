import {Model} from './model';
import {User} from './User';

export class Project extends Model {
    _id: string;
    Name: string;
    Description: string;
    Status: string
    RegistrationDate: Date;
    Cost: number;
    Categories: string[];
    Team: User[];         

    addCategory(category) {
    	if(!this.Categories) this.Categories = [];
    	this.Categories.push(category);
    }

    attributeNames: string[] = ['_id', 'Name', 'Description', 'Status', 'RegistrationsDate', 'Cost', 'Categories', 'Team'];
}