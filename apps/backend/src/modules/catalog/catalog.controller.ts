import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatalogService } from './catalog.service';

@ApiTags('Catalog')
@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get('categories')
  getCategories() {
    return this.catalogService.getCategories();
  }

  @Get('products')
  getProducts(@Query('categoryId') categoryId?: string) {
    return this.catalogService.getProducts(categoryId);
  }

  @Get('products/:sku')
  getProduct(@Param('sku') sku: string) {
    return this.catalogService.getProductBySku(sku);
  }
}
