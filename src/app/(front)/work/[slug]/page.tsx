import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost } from '@/sanity/sanity.queries';
import WorkFooter from '@src/components/WorkFooter';
import WorkImages from '@src/components/WorkImages';
import WorkInformations from '@src/components/WorkInformations';
import WorkMainImage from '@src/components/WorkMainImage';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = await getPost(params.slug);

  if (!work) {
    return {};
  }

  return {
    description: 'single work pages',
    title: `Allan Aoudji | ${work.title}`,
  };
}

async function Post({ params }: Props) {
  const post = await getPost(params.slug);

  if (post == null) {
    notFound();
  }

  return (
    <div>
      <WorkMainImage mainImage={post.mainImage} title={post.title} />
      <WorkInformations post={post} />
      <WorkImages gallery={post.gallery} title={post.title} />
      <WorkFooter nextPost={post.nextPost} previousPost={post.previousPost} />
    </div>
  );
}

export default Post;
