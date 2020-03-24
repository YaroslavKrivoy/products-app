import {Product} from './core/models/Product';
import {Colors} from './core/models/Colors';

export const products: Product[] = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    count: null,
    colorModel: [
      {color: Colors.Black, count: 2},
      {color: Colors.Red, count: 3},
      {color: Colors.White, count: 2}
    ]
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    count: null,
    colorModel: [
      {color: Colors.Black, count: 3},
      {color: Colors.Red, count: 0},
      {color: Colors.White, count: 0}
    ]
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: '',
    count: null,
    colorModel: [
      {color: Colors.Black, count: 1},
      {color: Colors.Red, count: 1},
      {color: Colors.White, count: 5}
    ]
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
