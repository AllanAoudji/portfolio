import { redirect } from 'next/navigation';

import NextPostCard from '@src/components/NextPostCard';
import PageContainer from '@src/components/PageContainer';
import RichPortableText from '@src/components/RichPortableText';
import WorkHeader from '@src/components/WorkHeader';
import WorkTitle from '@src/components/WorkTitle';
import { getPost } from '@/sanity/sanity.queries';
import { Metadata } from 'next';

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
    redirect('/');
  }

  return (
    <PageContainer
      className="grid pt-8 relative sm:gap-8 sm:grid-cols-7"
      drawer={drawer}
      footer={
        <NextPostCard className="pt-52 sm:pt-72" nextPost={post.nextPost} />
      }
      header={<WorkTitle title={post.title} year={post.year} />}
    >
      <WorkHeader post={post} />
      <div className="col-span-1 pt-8 px-8 sm:col-span-4 sm:pt-0 sm:px-0">
        {post.body && <RichPortableText value={post.body} />}
      </div>
    </PageContainer>
  );
}

export default Post;
