import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { fetchProduct, Product } from '../../utils/api';

export default function ProductPage() {
  const router = useRouter();
  const { sku } = router.query as { sku: string };
  const {
    data: product,
    isLoading,
    error,
  } = useQuery(['product', sku], () => fetchProduct(sku), { enabled: !!sku });

  if (isLoading) {
    return (
      <Layout>
        <p>Загрузка...</p>
      </Layout>
    );
  }
  if (!product || error) {
    return (
      <Layout>
        <p>Товар не найден</p>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>{product.name} – MarketDemo</title>
      </Head>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <img src={product.images[0]} alt={product.name} style={{ width: '100%', borderRadius: '4px' }} />
          <div style={{ display: 'flex', marginTop: '0.5rem', gap: '0.5rem' }}>
            {product.images.slice(1).map((img, index) => (
              <img key={index} src={img} alt={product.name} style={{ width: '60px', height: '60px', objectFit: 'cover', cursor: 'pointer' }} />
            ))}
          </div>
        </div>
        <div>
          <h1 style={{ fontSize: '1.5rem' }}>{product.name}</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0.5rem 0' }}>{product.price} ₽</p>
          {product.oldPrice && (
            <p style={{ textDecoration: 'line-through', color: '#999', margin: '0.25rem 0' }}>{product.oldPrice} ₽</p>
          )}
          <p style={{ margin: '1rem 0' }}>{product.description}</p>
          <button
            style={{ padding: '0.75rem 1.5rem', backgroundColor: '#542ea9', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            onClick={() => alert('Товар добавлен в корзину (демо)')}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </Layout>
  );
}