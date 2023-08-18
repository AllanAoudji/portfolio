import Link from 'next/link';

type Props = {
  page: Page;
};

function PageCard({ page }: Props) {
  return <Link href={`/page/${page.slug}`}>{page.name}</Link>;
}

export default PageCard;
