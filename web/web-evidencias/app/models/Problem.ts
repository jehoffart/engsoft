import {Model} from './model';
import {Project} from './Project';

export class Problem extends Model {
    _id: string;
    Name:string;
    Description: string;
    Questions: string[];
    MaxCost: string;
    Categories: string[];
    Registrations: [{
        Project: Project;
        Answers: string[];
    }];

    attributeNames: string[] = ['_id', 'Name', 'Description', 'Question', 'Categories', 'Registrations'];
}