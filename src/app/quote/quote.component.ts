import { Component, OnInit, } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes= [
    new Quote(1,"Muddy water is best cleared by leaving it alone","Allan Watts","Michael",0,0,new Date()),
    new Quote(2,"First solve the problem then write the code","John Johnson","Michael",0,0,new Date ())
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;

    quote.id = quoteLength+1;

    quote.completeDate= new Date(quote.completeDate)

    this.quotes.push(quote)

  }

  toggleDetails(index){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }

  deleteGoal(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)

      if(toDelete){
      this.quotes.splice(index,1);
    }
    }
  }
  
  upVote(upvote,index){
    if(upvote){
      this.quotes[index].upVote +=1;
    }
  }
  downVote(downvote,index){
    if(downvote){
      this.quotes[index].downVote +=1
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
