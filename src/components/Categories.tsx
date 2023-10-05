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
    <div className={`${className} flex flex-col`}>
      {categories.map((category) => (
        <>
          <CategoryCard category={category} key={category.slug} />
        </>
      ))}
    </div>
  );
}

export default Categories;
