import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  
  @Output() isComplete= new EventEmitter<boolean>();
  @Output() vote =new EventEmitter<boolean>();
  @Output() downvote =new EventEmitter<boolean>();
  @Output() 

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upVote(countVote:boolean){
    this.vote.emit(countVote);
  }
  downVote(countDownVote:boolean){
    this.downvote.emit(countDownVote);
  }

  constructor() { }

  ngOnInit() {
  }

}
