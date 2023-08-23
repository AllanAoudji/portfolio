import { getCategory } from '@/sanity/sanity.queries';
import PageContainer from '@src/components/PageContainer';
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

  if (!slug || slug.posts.length == 0) {
    redirect('/');
  }

  return (
    <PageContainer drawer={drawer}>
      <Title className="text-5xl pt-28 pb-14 px-6">{slug.title}</Title>
      <Posts
        categorySlug={params.slug}
        className="pt-4"
        posts={slug.posts}
        showHeaderText={false}
      />
    </PageContainer>
  );
}

export default Categorypage;
