import {Model} from './model';
import {Project} from './Project';

export class Problem extends Model {
    id: number;
    Name:string;
    Description: string;
    Questions: [string];
    MaxCost: number;
    Categories: [String];
    Registrations: [{
        Project: Project;
        Answers: [String];
    }];
           

    attributeNames: string[] = ['id', 'Name', 'Description', 'Question', 'Categories', 'Registrations'];
}