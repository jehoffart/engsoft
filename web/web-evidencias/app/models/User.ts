import {Model} from './model';

export class User extends Model {
    id: number;
    Name: string;
    Age: number;
    Email: string;
    City: string;
    State: string;
    Street: string;
    About: string;
    Login: string;
    Password: string;
    RegistrationDate: Date;
           

    attributeNames: string[] = ['id', 'Name', 'Age', 'Email', 'City', 'State', 'Street', 
    'About', 'Login', 'Password', 'RegistrationDate'];
}