import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public stock: Stock;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('test', '', 0, 0);
  }

}
