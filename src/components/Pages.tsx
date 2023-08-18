import { getPages } from '@/sanity/sanity.queries';
import PageCard from './PageCard';

type Props = {
  className?: string;
};

async function Pages({ className = '' }: Props) {
  const pages = await getPages();

  return (
    <div className={`font-bold flex gap-3 text-light ${className}`}>
      {pages.map((page) => (
        <PageCard key={page._id} page={page} />
      ))}
    </div>
  );
}

export default Pages;
