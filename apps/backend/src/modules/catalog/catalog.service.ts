import { Injectable } from '@nestjs/common';
import { categories, products } from '@market-demo/shared';
import type { Category, Product } from '@market-demo/shared';

@Injectable()
export class CatalogService {
  getCategories(): Category[] {
    return categories;
  }

  getProducts(categoryId?: string): Product[] {
    return categoryId ? products.filter((p) => p.categoryId === categoryId) : products;
  }

  getProductBySku(sku: string): Product | undefined {
    return products.find((p) => p.sku === sku);
  }
}
