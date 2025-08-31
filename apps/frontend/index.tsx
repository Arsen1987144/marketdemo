import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать в MarketDemo</h1>
      <p>Выберите категорию, чтобы начать</p>
      <ul className="list-disc ml-5">
        <li><Link href="/category/1">Категория 1</Link></li>
        <li><Link href="/category/2">Категория 2</Link></li>
      </ul>
    </div>
  );
}
