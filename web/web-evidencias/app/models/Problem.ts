import {Model} from './model';
import {Project} from './Project';

export class Problem extends Model {
    _id: string;
    Name:string;
    Description: string;
    Questions: [string];
    MaxCost: number;
    Categories: [String];
    Registrations: [{
        Project: Project;
        Answers: [String];
    }];
    
    addCategory(category) {
        if(!this.Categories) this.Categories = [];
        this.Categories.push(category);
    }

    attributeNames: string[] = ['_id', 'Name', 'Description', 'Question', 'Categories', 'Registrations'];
}