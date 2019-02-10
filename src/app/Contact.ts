export class Contact
{
   public name: string;
   public lastname: string;
   public address: string;
   public datefirst:string;
   public datelast: string;

    constructor(name :string, lastname: string,address: string,datefirst: string,datelast: string)
    {
        this.name=name;
        this.lastname=lastname;
        this.address=address;
        this.datelast=datelast;
        this.datefirst=datefirst;
    }
}