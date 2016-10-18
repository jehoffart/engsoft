import{ User } from './User';
export class Project{

    public Name : string;
    public Description : string;
    public Status : string;
    public RegistrationDate : string;
    public Cost : number;
    public Categories : Array<string>;
    public Team : Array<User>;
}
