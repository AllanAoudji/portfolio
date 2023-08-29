import Link from 'next/link';

type Props = {
  page: Page;
};

function PageCard({ page }: Props) {
  return (
    <Link
      className="transition hover:opacity-60 duration-1000"
      href={`/page/${page.slug}`}
    >
      {page.name.toLocaleUpperCase()}
    </Link>
  );
}

export default PageCard;
