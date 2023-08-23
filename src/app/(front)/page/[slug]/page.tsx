import { getPage } from '@/sanity/sanity.queries';
import DrawerContainer from '@src/components/DrawerContainer';
import RichPortableText from '@src/components/RichPortableText';
import Title from '@src/components/Title';
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
      <div className="px-6 md:max-w-5xl mx-auto">
        <Title className="text-5xl pt-28 pb-14">{page.name}</Title>
        {page.body && <RichPortableText value={page.body} />}
      </div>
    </>
  );
}
