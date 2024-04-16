import { Injectable } from '@nestjs/common';
import { Product } from './types/global';
import products from './data/products';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts(): Array<Product> {
    return products;
  }
}
