import { notFound } from 'next/navigation';

import NextPostCard from '@src/components/NextPostCard';
import PageContainer from '@src/components/PageContainer';
import WorkHeader from '@src/components/WorkHeader';
import { getPost } from '@/sanity/sanity.queries';
import { Metadata } from 'next';
import Wrapper from '@src/components/Wrapper';
import Title from '@src/components/Title';
import Grid from '@src/components/Grid';
import LinkImage from '@src/components/LinkImage';

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
        <Wrapper className="pb-24">
          <Title>
            {post.title + ' '}
            <span className="font-light text-4xl">{post.year}</span>
          </Title>
        </Wrapper>
      }
    >
      <Grid className="gap-y-16 sm:gap-y-12">
        <WorkHeader post={post} />
        <div className="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-7">
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
          <NextPostCard className="col-span-12 pt-6" nextPost={post.nextPost} />
        </div>
      </Grid>
    </PageContainer>
  );
}

export default Post;
