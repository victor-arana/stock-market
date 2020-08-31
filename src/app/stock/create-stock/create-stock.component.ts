import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;

  constructor() { 
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }

  setStockPrice(price){
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(){
    console.log('Creating stock ', this.stock);
  }

}
