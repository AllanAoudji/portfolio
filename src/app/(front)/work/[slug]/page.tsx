import { notFound } from 'next/navigation';

import NextPostCard from '@src/components/NextPostCard';
import PageContainer from '@src/components/PageContainer';
import RichPortableText from '@src/components/RichPortableText';
import WorkHeader from '@src/components/WorkHeader';
import { getPost } from '@/sanity/sanity.queries';
import { Metadata } from 'next';
import Wrapper from '@src/components/Wrapper';
import Title from '@src/components/Title';

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
      className="grid pt-8 relative md:gap-8 lg:grid-cols-7"
      drawer={drawer}
      footer={
        <NextPostCard className="pt-52 sm:pt-72" nextPost={post.nextPost} />
      }
      header={
        <Wrapper className="gap-8 grid grid-cols-1 md:grid-cols-5">
          <Title className="md:col-span-4 lg:col-span-3">
            {post.title + ' '}
            <span className="font-light text-3xl sm:text-4xl">{post.year}</span>
          </Title>
        </Wrapper>
      }
    >
      <WorkHeader post={post} />
      <div className="col-span-1 pt-8 px-8 md:px-16 lg:col-span-4 lg:pt-0 lg:px-0">
        {post.body && <RichPortableText value={post.body} />}
      </div>
    </PageContainer>
  );
}

export default Post;
