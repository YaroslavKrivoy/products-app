import {Injectable} from '@angular/core';
import {Product} from '../core/models/product';
import {products} from '../core/moc_data/products';

@Injectable({
  providedIn: 'root'
})

export class ProductServise {

  products: Product[] = products;

  getById(id: number): Product {
    return this.products.find(p => p.id === id);
  }
}
