import React, { ReactNode } from 'react';
import Link from 'next/link';

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/">Главная</Link>
          <Link href="/cart">Корзина</Link>
          <Link href="/checkout">Оформление</Link>
        </nav>
      </header>
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
      <footer style={{ padding: '1rem', borderTop: '1px solid #ddd', marginTop: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} MarketDemo. Все права защищены.</p>
      </footer>
    </>
  );
}
