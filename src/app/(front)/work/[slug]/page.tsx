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
        <LinkImage
          alt={post.mainImage.alt ?? `${post.title}`}
          key={post.mainImage.metadata.lqip}
          src={post.mainImage.url}
          width={post.mainImage.metadata.dimensions.width}
          height={post.mainImage.metadata.dimensions.height}
          blurDataURL={post.mainImage.metadata.lqip}
          placeholder="blur"
          className="pt-20"
        />
      }
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
          <Wrapper className="text-lg text-darker pt-12 flex justify-between">
            <PreviousPostCard previousPost={post.previousPost} />
            <NextPostCard nextPost={post.nextPost} />
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
