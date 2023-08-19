import { getCategory } from '@/sanity/sanity.queries';
import DrawerContainer from '@src/components/DrawerContainer';
import Posts from '@src/components/Posts';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
  searchParams: {
    drawer: string | undefined;
  };
};

async function Categorypage({ params, searchParams: { drawer } }: Props) {
  const slug = await getCategory(params.slug, '', '');

  if (!slug) {
    redirect('/');
  }

  return (
    <>
      <DrawerContainer open={drawer === 'true' ? true : false} />
      <h1 className="p-4 text-xl text-light">{slug.title}</h1>
      <Posts
        posts={slug.posts}
        categorySlug={params.slug}
        showHeaderText={false}
      />
    </>
  );
}

export default Categorypage;
