import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];

  constructor(private stockService: StockService,
              public messageService: MessageService) { 
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }

  setStockPrice(price){
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm){
    console.log('Stock form ', stockForm);
    if(stockForm.valid){
      let created = this.stockService.createStock(this.stock);
      if(created){
        this.messageService.message =
          'Successfully created stock with stock code: '
          + this.stock.code;
      } else{
        this.messageService.message = 'Stock with stock code: ' 
          + this.stock.code + ' already exists';
      }
    } else{
      console.error('Stock form is in an invalid state');
    }
  }

}
