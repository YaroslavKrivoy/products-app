import {Colors} from './Colors';
import {Images} from './Images';

export interface Product {
  name: string;
  price: number;
  description?: string;
  count: number;
  colorModel: ColorModel[];
  imageModel: Images[];
}

export interface ColorModel {
  color: Colors;
  count: number;
}
