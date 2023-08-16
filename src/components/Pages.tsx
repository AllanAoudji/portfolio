import { getPages } from '@/sanity/sanity.queries';
import PageCard from './PageCard';

async function Pages() {
  const pages = await getPages();

  return (
    <div className="flex items-center gap-3">
      {pages.map((page) => (
        <PageCard key={page._id} page={page} />
      ))}
    </div>
  );
}

export default Pages;
