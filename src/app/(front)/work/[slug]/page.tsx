import { getPost } from '@/sanity/sanity.queries';
import Categories from '@src/components/Categories';
import LinkImage from '@src/components/LinkImage';
import PageContainer from '@src/components/PageContainer';
import RichPortableText from '@src/components/RichPortableText';
import Title from '@src/components/Title';
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
    <PageContainer className="px-6" drawer={drawer}>
      <Title className="pt-28 text-2xl">
        {post.title + ' '}
        {post.year && (
          <span className="font-light">
            {new Date(post.year).getFullYear()}
          </span>
        )}
      </Title>

      <LinkImage
        alt={post.title}
        className="rounded-xl w-full overflow-hidden mt-4"
        height="1200"
        src={post.mainImage.url}
        width="1200"
      />

      <Categories categories={post.categories} />

      <div className="px-8 pt-28">
        {post.body && <RichPortableText value={post.body} />}
      </div>
    </PageContainer>
  );
}

export default Post;
