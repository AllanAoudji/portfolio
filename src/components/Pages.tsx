import { getPages } from '@/sanity/sanity.queries';
import PageCard from './PageCard';

type Props = {
  align?: 'items-start' | 'items-center' | 'items-end';
  className?: string;
  direction?: 'flex-row' | 'flex-col';
  itemSize?: 'h-12' | 'h-16';
};

async function Pages({
  align = 'items-center',
  className = '',
  direction = 'flex-row',
  itemSize = 'h-12',
}: Props) {
  const pages = await getPages();

  return (
    <div className={`flex gap-3 ${direction} ${align} ${className}`}>
      {pages.map((page) => (
        <PageCard itemSize={itemSize} key={page._id} page={page} />
      ))}
    </div>
  );
}

export default Pages;
