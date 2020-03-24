import {Colors} from './Colors';

export interface Product {
  name: string;
  price: number;
  description?: string;
  count: number;
  colorModel: ColorModel[];
}

export interface ColorModel {
  color: Colors;
  count: number;
}
