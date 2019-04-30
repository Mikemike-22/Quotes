export class Quote {
    public showDescription:boolean;

    constructor(public id:number, public quote:string, public author:string, public publisher:String, public upVote:number, public downVote: number,public actualDate:Date)
    
    {this.showDescription=false
    }
}
