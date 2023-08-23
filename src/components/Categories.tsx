import CategoryCard from './CategoryCard';

type Props = {
  categories:
    | {
        name: string;
        title: string;
        slug: string;
      }[]
    | null;
  className?: string;
};

function Categories({ categories, className }: Props) {
  if (!categories) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 pt-4 ${className}`}>
      {categories.map((category) => (
        <CategoryCard category={category} key={category.slug} />
      ))}
    </div>
  );
}

export default Categories;
