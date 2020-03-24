import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../core/models/Product';
import {ValueChangeCount} from '../product-color/product-color.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.product.colorModel.length; i++) {
      this.product.count += this.product.colorModel[i].count;
    }
  }

  recalculate(e) {
    if (e === ValueChangeCount.Plus) {
      this.product.count++;
    } else {
      this.product.count--;
    }
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
