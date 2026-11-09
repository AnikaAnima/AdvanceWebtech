import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity.js';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductdto } from './dto/partial-update-product.dto.js';

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

    async findAllProducts():Promise<{message:string; count:number; data:Products[]}>{
        try{
            const pro = await this.productsRepo.find();
        return{
            message: 'Products retrieved successfully',
            count: pro.length,
            data: pro,
        };

        }catch{
            throw new BadRequestException('Products are not found');
        }
        
    }

    async findOneProduct(id:number): Promise<Products | string> {
        try{
            const pro = await this.productsRepo.findOne({
                where: {
                    id: id,
                },
            });
            if(!pro){
                return `Product with ID ${id} is not found`;
            }
            return pro;

        }catch{
            throw new BadRequestException(`Product with ${id} is not found`)
        }
    }
async updateProduct(id: number,product:PartialUpdateProductdto): Promise<{ message: string; data: Products } | string> {
    try {
        const pro = await this.productsRepo.findOne({where:{ id: id }});
        if (pro) {
            const res = (await this.productsRepo.update(id, product)).affected;

            if (res != null && res > 0) {
                const updatedProduct = await this.productsRepo.findOne({where: { id: id }});
                return {
                    message: `Product with ID ${id} updated successfully`,
                    data: updatedProduct!
                };
            } else {
                return `Product with ID ${id} failed to be updated`;
            }
        } else {
            return `Product with ID ${id} not found`;
        }

    } catch {
        throw new BadRequestException(`Product with ID ${id} failed to update`);
    }
}

async replaceProduct(id: number,product: UpdateProductDto): Promise<{ message: string; data: Products } | string> {
    try {
        const pro = await this.productsRepo.findOne({where:{ id: id }});
        if (pro) {
            const res = (await this.productsRepo.update(id, product)).affected;

            if (res != null && res > 0) {
                const replaceProduct = await this.productsRepo.findOne({where: { id: id }});
                return {
                    message: `Product with ID ${id} replaced successfully`,
                    data: replaceProduct!
                };
            } else {
                return `Product with ID ${id} failed to be replaced`;
            }
        } else {
            return `Product with ID ${id} not found`;
        }

    } catch {
        throw new BadRequestException(`Product with ID ${id} failed to replace`);
    }
}



}
