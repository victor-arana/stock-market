import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  
  title = 'stock-market';

  public stock: Stock;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - On Changes - ', changes);    
  }

  ngOnInit(): void{
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  onToggleFavorite(stock: Stock){
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }
}
