import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Product} from '../core/models/product';
import {Observable} from 'rxjs';
import {ProductServise} from '../services/product.servise';

@Injectable({
  providedIn: 'root'
})

export class ProductResolver implements Resolve<Product> {

  constructor(private productService: ProductServise) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> | Promise<Product> | Product {
    return this.productService.getById(+route.params.productId);
  }

}
