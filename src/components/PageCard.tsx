import Image from 'next/image';
import Link from 'next/link';

type Props = {
  page: Page;
};

function PageCard({ page }: Props) {
  return (
    <Link href={`/page/${page.slug}`}>
      <Image
        alt={page.name}
        className="h-12 w-auto"
        height="200"
        src={page.image}
        width="200"
      />
    </Link>
  );
}

export default PageCard;
