import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../core/models/Product';
import {ValueChangeCount} from '../product-color/product-color.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  url: string;

  constructor() {
  }

  ngOnInit(): void {
    this.product.count = 0;
    for (let i = 0; i < this.product.colorModel.length; i++) {
      this.product.count += this.product.colorModel[i].count;
    }
    this.url = this.product.imageModel[0].url;
  }

  recalculate(e) {
    if (e === ValueChangeCount.Plus) {
      this.product.count++;
    } else {
      this.product.count--;
    }
  }

  changeImage(e) {
    this.url = (this.product.imageModel.find(image => image.color === e)).url;
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
