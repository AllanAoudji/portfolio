import { getPost } from '@/sanity/sanity.queries';
import NextPostCard from '@src/components/NextPostCard';
import PageContainer from '@src/components/PageContainer';
import RichPortableText from '@src/components/RichPortableText';
import WorkHeader from '@src/components/WorkHeader';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
  searchParams: {
    drawer: string | undefined;
  };
};

async function Post({ params, searchParams: { drawer } }: Props) {
  const post = await getPost(params.slug);

  if (post == null) {
    redirect('/');
  }

  return (
    <PageContainer
      className="px-6"
      drawer={drawer}
      header={<WorkHeader post={post} />}
      footer={<NextPostCard className="pt-48" nextPost={post.nextPost} />}
    >
      <div className="px-8 pt-28">
        {post.body && <RichPortableText value={post.body} />}
      </div>
    </PageContainer>
  );
}

export default Post;
