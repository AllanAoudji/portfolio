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
      className="duration-1000 text-dark transition-all hover:text-darker"
      href={`/category/${category.slug}`}
      key={category.slug}
    >
      {category.name.toLowerCase()}
    </Link>
  );
}

export default CategoryCard;
