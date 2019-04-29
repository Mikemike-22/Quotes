export class Quote {
    public showDescription:boolean;

    constructor(public id:number, public quote:string, public author:string, public publisher:String, public upvote:number, public downvote: number,public actualDate:Date)
    
    {this.showDescription
    }
}
