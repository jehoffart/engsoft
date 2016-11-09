export class Problem{

    public _id : string;
    public Name : string;
    public Description : string;
    public Questions : string;
    public MaxCost : number;
    public Categories : Array<string>;
    public Registrations : Array<Object>;

    constructor(){
      this.Categories = [];
      this.Registrations = [];
    }
}
