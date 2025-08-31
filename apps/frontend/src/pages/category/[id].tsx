import { useRouter } from 'next/router';
import Link from 'next/link';

// Category detail page displays placeholder information for the selected category
const CategoryPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Категория {id}</h1>
      <p>Товары этой категории будут здесь.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        ← Назад
      </Link>
    </div>
  );
};

export default CategoryPage;
