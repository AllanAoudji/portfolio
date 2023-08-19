import { getCategory } from '@/sanity/sanity.queries';
import DrawerContainer from '@src/components/DrawerContainer';
import Posts from '@src/components/Posts';
import Title from '@src/components/Title';
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
      <Title className="p-4">{slug.title}</Title>
      <Posts
        categorySlug={params.slug}
        className="pt-4"
        posts={slug.posts}
        showHeaderText={false}
      />
    </>
  );
}

export default Categorypage;
