import CategoryCard from './CategoryCard';

type Props = {
  categories:
    | {
        name: string;
        slug: string;
        title: string;
      }[]
    | null;
  className?: string;
};

function Categories({ categories, className }: Props) {
  if (!categories) {
    return null;
  }

  return (
    <div className={`${className}`}>
      {categories.map((category, index) => (
        <>
          <CategoryCard category={category} key={category.slug} />
          {index !== categories.length - 1 && <span>{', '}</span>}
        </>
      ))}
    </div>
  );
}

export default Categories;
