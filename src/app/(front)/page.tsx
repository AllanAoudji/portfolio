import HomeHeader from '@src/components/HomeHeader';
import PageContainer from '@src/components/PageContainer';
import Posts from '@src/components/Posts';
import { getPosts } from '@/sanity/sanity.queries';
import Grid from '@src/components/Grid';
import Image from 'next/image';

import helloWorld from '@/public/hello-world-light.png';
import Wrapper from '@src/components/Wrapper';

type Props = {
  searchParams: {
    drawer: string | undefined;
  };
};

export default async function Home({ searchParams: { drawer } }: Props) {
  const posts = await getPosts(Number.MAX_SAFE_INTEGER, '');

  return (
    <>
      <PageContainer
        drawer={drawer}
        header={
          <>
            <HomeHeader />{' '}
            <Wrapper backgroundColor="dark">
              <Grid>
                <Image
                  alt="home-text"
                  className="col-span-6 py-20 sm:col-span-10 sm:col-start-2 lg:col-span-6 lg:col-start-4"
                  src={helloWorld}
                />
              </Grid>
            </Wrapper>
          </>
        }
      >
        <Grid className="pt-36 gap-y-14 sm:gap-y-14 lg:gap-y-14">
          <Posts posts={posts} />
        </Grid>
      </PageContainer>
    </>
  );
}
