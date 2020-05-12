import {Colors} from './colors';
import {Images} from './images';

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  count: number;
  colorModel: ColorModel[];
}

export interface ColorModel {
  color: Colors;
  count: number;
  imageModel: Images;
}
