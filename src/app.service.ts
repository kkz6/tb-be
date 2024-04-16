import { Injectable } from '@nestjs/common';
import { Address, Product } from './types/global';
import products from './data/products';
import address from './data/address';
import { cartItems } from './data/cart';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts(): Array<Product> {
    return products;
  }

  getAddress(): Address[] {
    return address;
  }

  getCartItems() {
    return cartItems;
  }

  getProduct(id: number) {
    return products.find((product) => product.id == id);
  }
}
