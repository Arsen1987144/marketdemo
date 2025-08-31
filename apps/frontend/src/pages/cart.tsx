import Head from 'next/head';
import Layout from '../components/Layout';

export default function CartPage() {
  return (
    <Layout>
      <Head>
        <title>Корзина – MarketDemo</title>
      </Head>
      <h1>Корзина</h1>
      <p>Корзина пока пуста. Добавьте товары.</p>
    </Layout>
  );
}
