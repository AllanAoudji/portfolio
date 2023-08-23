import Link from 'next/link';

type Props = {
  page: Page;
};

function PageCard({ page }: Props) {
  return (
    <Link href={`/page/${page.slug}`}>{page.name.toLocaleUpperCase()}</Link>
  );
}

export default PageCard;
