import { Component, Input , Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnChanges{

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>
  

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item Component - On Changes - ', changes);    
  }

  onToggleFavorite(event){
    this.toggleFavorite.emit(this.stock);
  }

}
