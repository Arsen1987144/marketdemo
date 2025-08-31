/**
 * Тип данных категории.
 */
export interface Category {
  id: string;
  name: string;
  parentId?: string | null;
}

/**
 * Тип данных варианта товара.
 */
export interface ProductVariant {
  id: string;
  color?: string;
  size?: string;
  barcode: string;
  stockByWarehouse: Record<string, number>;
}

/**
 * Тип данных товара (SKU).
 */
export interface Product {
  sku: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating?: number;
  images: string[];
  variants: ProductVariant[];
}

// Перечень категорий ( минимум 20 ). Для удобства используются плоские идентификаторы.
export const categories: Category[] = [
  { id: 'cat1', name: 'Одежда' },
  { id: 'cat2', name: 'Обувь' },
  { id: 'cat3', name: 'Аксессуары' },
  { id: 'cat4', name: 'Электроника' },
  { id: 'cat5', name: 'Бытовая техника' },
  { id: 'cat6', name: 'Детские товары' },
  { id: 'cat7', name: 'Красота' },
  { id: 'cat8', name: 'Здоровье' },
  { id: 'cat9', name: 'Спорт' },
  { id: 'cat10', name: 'Дом и кухня' },
  { id: 'cat11', name: 'Авто' },
  { id: 'cat12', name: 'Зоотовары' },
  { id: 'cat13', name: 'Игрушки' },
  { id: 'cat14', name: 'Канцтовары' },
  { id: 'cat15', name: 'Строительство и ремонт' },
  { id: 'cat16', name: 'Дача и сад' },
  { id: 'cat17', name: 'Продукты' },
  { id: 'cat18', name: 'Ювелирные изделия' },
  { id: 'cat19', name: 'Праздничные товары' },
  { id: 'cat20', name: 'Медиа' }
];

// Пример данных товаров. Для полноценного демо следует генерировать 15 товаров на категорию в сид‑скрипте.
export const products: Product[] = [
  {
    sku: 'SKU-0001',
    categoryId: 'cat1',
    name: 'Футболка унисекс',
    description: 'Базовая хлопковая футболка нейтрального дизайна.',
    price: 1200,
    oldPrice: 1500,
    discount: 20,
    rating: 4.5,
    images: [
      'https://placehold.co/600x600?text=Футболка+1',
      'https://placehold.co/600x600?text=Футболка+2',
      'https://placehold.co/600x600?text=Футболка+3'
    ],
    variants: [
      {
        id: 'SKU-0001-1',
        color: 'Белый',
        size: 'M',
        barcode: '1234567890123',
        stockByWarehouse: { MSK_FBO_1: 10, SPB_FBO_1: 5, RND_FBS_1: 0 }
      },
      {
        id: 'SKU-0001-2',
        color: 'Чёрный',
        size: 'L',
        barcode: '1234567890124',
        stockByWarehouse: { MSK_FBO_1: 7, SPB_FBO_1: 3, RND_FBS_1: 2 }
      }
    ]
  },
  {
    sku: 'SKU-0002',
    categoryId: 'cat4',
    name: 'Беспроводные наушники',
    description: 'Компактные наушники с шумоподавлением и зарядным футляром.',
    price: 3500,
    oldPrice: 4500,
    discount: 22,
    rating: 4.8,
    images: [
      'https://placehold.co/600x600?text=Наушники+1',
      'https://placehold.co/600x600?text=Наушники+2'
    ],
    variants: [
      {
        id: 'SKU-0002-1',
        color: 'Белый',
        barcode: '1234567890125',
        stockByWarehouse: { MSK_FBO_1: 12, SPB_FBO_1: 8, RND_FBS_1: 4 }
      }
    ]
  },
  {
    sku: 'SKU-0003',
    categoryId: 'cat10',
    name: 'Набор кухонных ножей',
    description: 'Профессиональные ножи из нержавеющей стали для дома и кухни.',
    price: 2800,
    images: [
      'https://placehold.co/600x600?text=Ножи+1',
      'https://placehold.co/600x600?text=Ножи+2'
    ],
    variants: [
      {
        id: 'SKU-0003-1',
        barcode: '1234567890126',
        stockByWarehouse: { MSK_FBO_1: 15, SPB_FBO_1: 10, RND_FBS_1: 6 }
      }
    ]
  }
];
