import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, "robert mugabe", "When one’s goat gets missing, the aroma of a neighbour’s soup gets suspicious", 10, 3, "2 hours Ago"),
    new Quotes(2, "robert mugabe", "Cigarette is a pinch of tobacco rolled in a piece of paper with fire on one end and a fool on the other end. ", 7, 19, "1 hour Ago"),
    new Quotes(3, "robert mugabe", "Treat every part of your towel nicely because the part that wipes your buttocks today will wipe your face tomorrow. ", 17, 8, "25 minutes Ago")
  ];

  toggleDetails(index){
    this.quotes[index].additionalInfo = !this.quotes[index].additionalInfo;
  }


  postedNewQuote(latestQuote){

    latestQuote.id = (this.quotes.length + 1);
    latestQuote.upVote = 0;
    latestQuote.downVote = 0;
    latestQuote.timePosted = latestQuote.timePosted;
    this.quotes.push(latestQuote);
  }

  deleteQuote(index){
    let toDelete = confirm('Are you sure you want to delete this quote? This action will be permanent!');
    if (toDelete){
      this.quotes.splice(index, 1);
    }else{
      alert("Your quote remains")
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
