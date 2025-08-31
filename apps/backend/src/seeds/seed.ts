import { categories, products } from '@market-demo/shared';
import { Client } from 'pg';

async function seed() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  // Insert categories
  for (const category of categories) {
    await client.query(
      `INSERT INTO categories (id, name, parent_id) VALUES ($1, $2, $3) ON CONFLICT (id) DO NOTHING`,
      [category.id, category.name, category.parentId || null],
    );
  }

  // Insert products and variants
  for (const product of products) {
    await client.query(
      `INSERT INTO products (sku, name, description, price, old_price, discount, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (sku) DO NOTHING`,
      [
        product.sku,
        product.name,
        product.description || '',
        product.price,
        product.oldPrice || null,
        product.discount || null,
        product.categoryId,
      ],
    );

    for (const variant of product.variants || []) {
      await client.query(
        `INSERT INTO product_variants (sku, color, size, barcode) VALUES ($1, $2, $3, $4) ON CONFLICT (sku, color, size) DO NOTHING`,
        [
          product.sku,
          variant.color || null,
          variant.size || null,
          variant.barcode || null,
        ],
      );

      if (variant.stock) {
        for (const [warehouse, quantity] of Object.entries(variant.stock)) {
          await client.query(
            `INSERT INTO variant_stock (sku, warehouse, quantity) VALUES ($1, $2, $3) ON CONFLICT (sku, warehouse) DO UPDATE SET quantity = EXCLUDED.quantity`,
            [product.sku, warehouse, quantity],
          );
        }
      }
    }
  }

  await client.end();
  console.log('Seed completed');
}

seed().catch((err) => {
  console.error(err);
});
