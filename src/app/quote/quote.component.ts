import { Component, OnInit, } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes= [
    new Quote(1,"An apple a day keeps the doctor away","Not A Doctor","Michael",0,0,new Date()),
    new Quote(2,"First solve the problem then write the code","John Johnson","Michael",0,0,new Date ())
  ]

  constructor() { }

  ngOnInit() {
  }

}
