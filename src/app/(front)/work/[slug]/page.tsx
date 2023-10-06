import { notFound } from 'next/navigation';

import NextPostCard from '@src/components/NextPostCard';
import PageContainer from '@src/components/PageContainer';
import WorkHeader from '@src/components/WorkHeader';
import { getPost } from '@/sanity/sanity.queries';
import { Metadata } from 'next';
import Grid from '@src/components/Grid';
import LinkImage from '@src/components/LinkImage';
import PreviousPostCard from '@src/components/PreviousPostCard';
import Footer from '@src/components/Footer';
import Wrapper from '@src/components/Wrapper';
import WorkMainImage from '@src/components/WorkMainImage';

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
      header={<WorkMainImage mainImage={post.mainImage} title={post.title} />}
      footer={
        <>
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
          <Wrapper className="border-darker border-t-2 flex justify-center pt-16 text-dark sm:pt-24 sm:text-xl">
            <PreviousPostCard
              className="pr-3 border-r-2 border-dark"
              previousPost={post.previousPost}
            />
            <NextPostCard className="pl-[14px]" nextPost={post.nextPost} />
          </Wrapper>
          <Footer darkBackground={false} />
        </>
      }
    >
      <Grid className="gap-y-12 sm:gap-y-12 lg:gap-y-12">
        <WorkHeader post={post} />
      </Grid>
    </PageContainer>
  );
}

export default Post;
