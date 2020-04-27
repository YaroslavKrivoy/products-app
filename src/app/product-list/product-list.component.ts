import {Component, OnInit} from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products = products;

  toggle = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  switchToggle(): void {
    this.toggle = !this.toggle;
  }
}
