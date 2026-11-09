import { Controller, Get, Post, Body, Param, Patch, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { Products } from './entities/products.entity.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductdto } from './dto/partial-update-product.dto.js';


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
  async updateProductPartially(@Body() product:PartialUpdateProductdto,@Param('id',ParseIntPipe) id:number,):Promise<{message:string; data:Products} | string>{
    return await this.productsService.updateProduct(id,product);
  }

   @Put(':id')
  async replaceProduct(@Body() product:UpdateProductDto,@Param('id',ParseIntPipe) id:number,):Promise<{message:string; data:Products} | string>{
    return await this.productsService.updateProduct(id,product);
  }

  @Delete(':id')
  async removeProduct(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return await this.productsService.removeProduct(id);
}

@Get('category/:category')
async findByCategory(@Param('category') category: string): Promise<{ message: string; count: number; data: Products[] } | string> {
    return await this.productsService.findByCategory(category);
}
  


}
