import Image from 'next/image';
import Link from 'next/link';

type Props = {
  page: Page;
  itemSize?: 'h-12' | 'h-16';
};

function PageCard({ page, itemSize = 'h-12' }: Props) {
  return (
    <Link href={`/page/${page.slug}`}>
      <Image
        alt={page.name}
        className={`w-auto ${itemSize}`}
        height="200"
        src={page.image}
        width="200"
      />
    </Link>
  );
}

export default PageCard;
