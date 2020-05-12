import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list.component';
import {ProductPageComponent} from '../product-page/product-page.component';
import {ProductResolver} from '../resolver/product.resolver';
import {ProductCommentComponent} from '../product-comment/product-comment.component';



const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:productId', component: ProductPageComponent, resolve: {product: ProductResolver}, children: [
      {path: 'comment', component: ProductCommentComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductListRoutingModule {

}
