-- SQL migration: создание основных таблиц каталога, товаров и вариантов

CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id VARCHAR(50) REFERENCES categories (id)
);

CREATE TABLE IF NOT EXISTS products (
    sku VARCHAR(50) PRIMARY KEY,
    category_id VARCHAR(50) NOT NULL REFERENCES categories (id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    old_price NUMERIC(10, 2),
    discount NUMERIC(5, 2),
    rating NUMERIC(2, 1)
);

CREATE TABLE IF NOT EXISTS product_variants (
    id VARCHAR(50) PRIMARY KEY,
    product_sku VARCHAR(50) NOT NULL REFERENCES products (sku),
    color VARCHAR(50),
    size VARCHAR(50),
    barcode VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS variant_stock (
    variant_id VARCHAR(50) NOT NULL REFERENCES product_variants (id),
    warehouse VARCHAR(50) NOT NULL,
    stock INTEGER NOT NULL,
    PRIMARY KEY (variant_id, warehouse)
);
