import { getPage } from '@/sanity/sanity.queries';
import DrawerContainer from '@src/components/DrawerContainer';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
  searchParams: {
    drawer: string | undefined;
  };
};

export default async function Page({
  params,
  searchParams: { drawer },
}: Props) {
  const page = await getPage(params.slug);

  if (page == null) {
    redirect('/');
  }

  return (
    <>
      <DrawerContainer open={drawer === 'true' ? true : false} />
      <h1>{page.name}</h1>
    </>
  );
}