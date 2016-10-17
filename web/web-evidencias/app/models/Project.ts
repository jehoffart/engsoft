import {Model} from './model';
import {User} from './User';

export class Project extends Model {
    id: number;
    Name: string;
    Description: string;
    Status: string
    RegistrationDate: Date;
    Cost: number;
    Categories: string;
    Team: [User];
           

    attributeNames: string[] = ['id', 'Name', 'Description', 'Status', 'RegistrationsDate', 'Cost', 'Categories', 'Team'];
}