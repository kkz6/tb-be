import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Address, Product } from './types/global';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  getProducts(): Array<Product> {
    return this.appService.getProducts();
  }

  @Get('product/:id')
  getProduct(@Param('id') id: number) {
    return this.appService.getProduct(id);
  }

  @Get('address')
  getAddress(): Address[] {
    return this.appService.getAddress();
  }

  @Get('cart-items')
  getCartProducts() {
    return this.appService.getCartItems();
  }
}
