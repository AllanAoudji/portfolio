import { redirect } from 'next/navigation';

import { getCategory } from '@/sanity/sanity.queries';
import PageContainer from '@src/components/PageContainer';
import Posts from '@src/components/Posts';
import Title from '@src/components/Title';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: {
    drawer: string | undefined;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategory(params.slug, '', '');

  if (!category) {
    return {};
  }

  return {
    title: `Allan Aoudji | ${category.name}`,
    description: 'single category page',
  };
}

async function Categorypage({ params, searchParams: { drawer } }: Props) {
  const slug = await getCategory(params.slug, '', '');

  if (!slug || slug.posts.length == 0) {
    redirect('/');
  }

  return (
    <PageContainer
      className="gap-3 grid grid-cols-1 items-end transition-all sm:grid-cols-3"
      drawer={drawer}
      header={
        <Title className="duration-300 mx-auto pb-16 pt-36 px-6 transition-all uppercase sm:pb-24 sm:pt-48 sm:px-12 md:max-w-5xl">
          {slug.title}
        </Title>
      }
    >
      <Posts
        categorySlug={params.slug}
        posts={slug.posts}
        showHeaderText={false}
      />
    </PageContainer>
  );
}

export default Categorypage;
