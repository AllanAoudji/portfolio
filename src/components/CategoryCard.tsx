import Link from 'next/link';

type Props = {
  category: {
    name: string;
    title: string;
    slug: string;
  };
};

function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="bg-light block py-px px-3 rounded-full text-dark text-lg"
      key={category.slug}
    >
      {category.name.toLowerCase()}
    </Link>
  );
}

export default CategoryCard;
