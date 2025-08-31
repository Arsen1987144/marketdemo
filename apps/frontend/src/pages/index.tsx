import Link from 'next/link';
import { Category } from '@market-demo/shared';

// Home page showing a list of categories with links to category pages
const IndexPage = () => {
  const categories: Category[] = [
    { id: 1, name: 'Одежда', parentId: null },
    { id: 2, name: 'Обувь', parentId: null },
    { id: 3, name: 'Аксессуары', parentId: null },
    { id: 4, name: 'Электроника', parentId: null },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Категории</h1>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link href={`/category/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
