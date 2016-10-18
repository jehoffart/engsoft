import {Model} from './model';
import {User} from './User';

export class Project extends Model {
    _id: string;
    Name: string;
    Description: string;
    Status: string
    RegistrationDate: Date;
    Cost: number;
    Categories: string;
    Team: [User];
           

    attributeNames: string[] = ['_id', 'Name', 'Description', 'Status', 'RegistrationsDate', 'Cost', 'Categories', 'Team'];
}