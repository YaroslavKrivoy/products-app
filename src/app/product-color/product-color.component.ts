import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorModel} from '../core/models/Product';

export enum ValueChangeCount {
  Plus = 'PLUS',
  Minus = 'MINUS'
}

@Component({
  selector: 'app-product-color',
  templateUrl: './product-color.component.html',
  styleUrls: ['./product-color.component.scss']
})
export class ProductColorComponent implements OnInit {

  @Input()
  productColorItem: ColorModel;

  @Output() changeCount = new EventEmitter<ValueChangeCount>();
  @Output() changeImages = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickPlus() {
    this.changeCount.emit(ValueChangeCount.Plus);
    this.productColorItem.count++;
  }

  onClickMinus() {
    if (this.productColorItem.count > 0) {
      this.changeCount.emit(ValueChangeCount.Minus);
      this.productColorItem.count--;
    }
  }

  changeImage(color: string) {
    this.changeImages.emit(color);
  }

  // productColorItem.color could be used directly in html,
  // no need to create separate function for this purpose (as an option)
  getColor() {
    return this.productColorItem.color;
  }
}
