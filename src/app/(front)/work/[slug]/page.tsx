import { notFound } from 'next/navigation';

import NextPostCard from '@src/components/NextPostCard';
import PageContainer from '@src/components/PageContainer';
import RichPortableText from '@src/components/RichPortableText';
import WorkHeader from '@src/components/WorkHeader';
import { getPost } from '@/sanity/sanity.queries';
import { Metadata } from 'next';
import Wrapper from '@src/components/Wrapper';
import Title from '@src/components/Title';
import Grid from '@src/components/Grid';

type Props = {
  params: { slug: string };
  searchParams: {
    drawer: string | undefined;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = await getPost(params.slug);

  if (!work) {
    return {};
  }

  return {
    title: `Allan Aoudji | ${work.title}`,
    description: 'single work pages',
  };
}

async function Post({ params, searchParams: { drawer } }: Props) {
  const post = await getPost(params.slug);

  if (post == null) {
    notFound();
  }

  return (
    <PageContainer
      drawer={drawer}
      header={
        <Wrapper>
          <Grid className="border-b-2 border-dark pb-8 mb-8">
            <Title className="col-span-6 sm:col-span-12 lg:col-span-10">
              {post.title + ' '}
              <span className="font-light text-3xl sm:text-4xl">
                {post.year}
              </span>
            </Title>
          </Grid>
        </Wrapper>
      }
    >
      <Grid className="gap-y-16">
        <WorkHeader post={post} />
        <div className="grid grid-cols-12 col-span-6 sm:col-span-12 md:col-span-7">
          <div className="col-span-10 col-start-2 md:col-span-12">
            {post.body && <RichPortableText value={post.body} />}
          </div>
          <NextPostCard
            className="col-span-12 pt-20"
            nextPost={post.nextPost}
          />
        </div>
      </Grid>
    </PageContainer>
  );
}

export default Post;
