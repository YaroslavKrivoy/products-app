import { Component, OnInit } from '@angular/core';
import {ProductServise} from '../services/product.servise';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Product} from '../core/models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productService: ProductServise
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.product = this.productService.getById(+params.productId);
    // });

    this.route.data.subscribe( data => {
      this.product = data.product;
    });
  }

}
