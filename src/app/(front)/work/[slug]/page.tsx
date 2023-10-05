import { notFound } from 'next/navigation';

import NextPostCard from '@src/components/NextPostCard';
import PageContainer from '@src/components/PageContainer';
import WorkHeader from '@src/components/WorkHeader';
import { getPost } from '@/sanity/sanity.queries';
import { Metadata } from 'next';
import Title from '@src/components/Title';
import Grid from '@src/components/Grid';
import LinkImage from '@src/components/LinkImage';
import PreviousPostCard from '@src/components/PreviousPostCard';
import Footer from '@src/components/Footer';

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
    <PageContainer drawer={drawer} footer={<Footer />}>
      <Grid className="gap-y-12 sm:gap-y-12 lg:gap-y-12">
        <Title className="col-span-6 sm:col-span-12">{post.title}</Title>
        <WorkHeader post={post} />
        <div className="col-span-6 sm:col-span-12">
          {!!post.gallery &&
            post.gallery.map((image, index) => (
              <LinkImage
                alt={image.alt ?? `${post.title} ${index}`}
                key={image.metadata.lqip}
                src={image.url}
                width={image.metadata.dimensions.width}
                height={image.metadata.dimensions.height}
                blurDataURL={image.metadata.lqip}
                placeholder="blur"
              />
            ))}
          <div className="text-lg pt-6 flex justify-between sm:text-xl sm:pt-12">
            <PreviousPostCard
              className="col-span-12 pt-6"
              previousPost={post.previousPost}
            />
            <NextPostCard
              className="col-span-12 pt-6"
              nextPost={post.nextPost}
            />
          </div>
        </div>
      </Grid>
    </PageContainer>
  );
}

export default Post;
