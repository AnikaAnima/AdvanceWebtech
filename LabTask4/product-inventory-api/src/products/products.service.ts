import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity.js';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto.js';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private readonly productsRepo: Repository<Products>,){}

    async createProduct(product: CreateProductDto): Promise<{message:string; data:Products}>{
        try{
            const pro = await this.productsRepo.create(product);
            const saveProduct = await this.productsRepo.save(pro);
            return{
                message: 'Product Created successfully',
                data: saveProduct,
            }

        }catch{
            throw new BadRequestException('Product failed to create');
        }
    }

   

}
