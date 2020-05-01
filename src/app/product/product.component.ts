import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../core/models/product';
import {ValueChangeCount} from '../product-color/product-color.component';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  url: string;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.product.count = 0;
    for (let i = 0; i < this.product.colorModel.length; i++) {
      this.product.count += this.product.colorModel[i].count;
    }
    this.url = this.product.colorModel[0].imageModel.url;
  }

  recalculate(e) {
    if (e === ValueChangeCount.Plus) {
      this.product.count++;
    } else {
      this.product.count--;
    }
  }

  changeImage(e) {
    this.url = (this.product.colorModel.find(image => image.color === e)).imageModel.url;
  }

  share() {
    this.snackBar.open('The product has been shared!', 'act', {
      duration: 2000,
      panelClass: 'snack-bar'
    });
  }

  onNotify() {
    this.snackBar.open('You will be notified when the product goes on sale', 'act', {
      duration: 2000,
      panelClass: 'snack-bar'
    });
  }

}
