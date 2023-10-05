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
      className="transition-all first-letter:uppercase"
      href={`/category/${category.slug}`}
      key={category.slug}
    >
      {category.name.toLowerCase()}
    </Link>
  );
}

export default CategoryCard;
