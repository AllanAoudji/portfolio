import { notFound } from 'next/navigation';

import { getCategory } from '@/sanity/sanity.queries';
import PageContainer from '@src/components/PageContainer';
import Posts from '@src/components/Posts';
import Title from '@src/components/Title';
import { Metadata } from 'next';
import Wrapper from '@src/components/Wrapper';
import Grid from '@src/components/Grid';

type Props = {
  params: { slug: string };
  searchParams: {
    drawer: string | undefined;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategory(params.slug, Number.MAX_SAFE_INTEGER, '');

  if (!category) {
    return {};
  }

  return {
    title: `Allan Aoudji | ${category.name}`,
    description: 'single category page',
  };
}

async function Categorypage({ params, searchParams: { drawer } }: Props) {
  const slug = await getCategory(params.slug, Number.MAX_SAFE_INTEGER, '');

  if (!slug || slug.posts.length == 0) {
    notFound();
  }

  return (
    <PageContainer
      drawer={drawer}
      header={
        <Wrapper className="pb-16 uppercase sm:pb-24">
          <Title>{slug.title}</Title>
        </Wrapper>
      }
    >
      <Grid className="gap-y-14 sm:gap-y-14 lg:gap-y-14">
        <Posts
          categorySlug={params.slug}
          posts={slug.posts}
          showCategories={false}
        />
      </Grid>
    </PageContainer>
  );
}

export default Categorypage;
