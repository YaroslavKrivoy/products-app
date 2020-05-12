import {Product} from '../models/product';
import {Colors} from '../models/colors';

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    count: null,
    colorModel: [
      {color: Colors.Black, count: 2, imageModel: {
          url: 'https://www.cimri.club/image/cache/data/aksesuar_grup_4_kd/telefon_aksesuar-114160-0-204x210.jpg'
        }},
      {color: Colors.Red, count: 3, imageModel: {
          url: 'https://i.ebayimg.com/images/g/2yUAAOSw0Thdt299/s-l400.jpg'
        }},
      {color: Colors.White, count: 2, imageModel: {
          url: 'https://www.ttn.by/files/246577_1-main69131537751337.jpg'
        }}
    ]
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    count: null,
    colorModel: [
      {color: Colors.Black, count: 3, imageModel: {
          url: 'https://i.pinimg.com/736x/8e/8c/c5/8e8cc5235d9a10e6f6e2b1c3da2c7fb6.jpg'
        }},
      {color: Colors.Red, count: 0, imageModel: {
          url: 'https://images.ua.prom.st/2179388048_w200_h200_tpuglass-chehol-glossy.jpg'
        }},
      {color: Colors.White, count: 0, imageModel: {
          url: 'https://mcdn01.gittigidiyor.net/49242/tn30/492423300_tn30_0.jpg'
        }}
    ]
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A large phone with one of the best screens',
    count: null,
    colorModel: [
      {color: Colors.Black, count: 1, imageModel: {
          url: 'https://www.777555.by/content/thumb/items/1079466_v01_b_282.jpg'
        }},
      {color: Colors.Red, count: 1, imageModel: {
          // tslint:disable-next-line:max-line-length
          url: 'https://patifon.ua/storage/web/cache/1/pQzdA8vhEik99iaLdQqriLV2bME-z5-V.jpg?w=200&h=200&fit=fill&s=507f598302e15ed253cf0bcebc1e1b28'
        }},
      {color: Colors.White, count: 5, imageModel: {
          // tslint:disable-next-line:max-line-length
          url: 'https://newauctionstatic.com.ua/offer_images/cmn8/2019/05/14/03/big/K/KS49q7S6ZWh/zadnjaja_kryshka_samsung_g350_g350h_galaxy_star_advance_duos_belaja.jpg'
        }}
    ]
  }
];
