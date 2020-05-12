import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {ProductAlertsComponent} from '../product-alerts/product-alerts.component';
import {ProductColorComponent} from '../product-color/product-color.component';
import {ProductColorListComponent} from '../product-color-list/product-color-list.component';
import {ProductComponent} from '../product/product.component';
import {ProductImageComponent} from '../product-image/product-image.component';
import {ProductPageComponent} from '../product-page/product-page.component';
import {ProductCommentComponent} from '../product-comment/product-comment.component';

import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {ProductListRoutingModule} from './product-list-routing.module';
import {ProductCommentFormComponent} from '../product-comment-form/product-comment-form.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductColorComponent,
    ProductColorListComponent,
    ProductComponent,
    ProductImageComponent,
    ProductPageComponent,
    ProductCommentFormComponent,
    ProductCommentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductListRoutingModule
  ]
})

export class ProductListModule {

}
