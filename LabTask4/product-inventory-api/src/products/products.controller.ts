import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { Products } from './entities/products.entity.js';
import { UpdateProductDto } from './dto/update-product.dto.js';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() product: CreateProductDto): Promise<{message:string; data:Products}>{
    return await this.productsService.createProduct(product);
  }

  @Get()
  async findProducts(){
    return await this.productsService.findAllProducts();
  }

  @Get(":id")
  async findOneProduct(@Param('id') id: number): Promise<Products | string> {
    return await this.productsService.findOneProduct(id);
  }
  @Patch(':id')
  async updateProductPartially(@Body() product:UpdateProductDto,@Param('id') id:number,):Promise<{message:string; data:Products} | string>{
    return await this.productsService.updateProduct(id,product);
  }
  


}
