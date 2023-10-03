import HomeHeader from '@src/components/HomeHeader';
import PageContainer from '@src/components/PageContainer';
import Posts from '@src/components/Posts';
import { getPosts } from '@/sanity/sanity.queries';
import Grid from '@src/components/Grid';
import Prestations from '@src/components/Prestations';
import Title from '@src/components/Title';

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
            <HomeHeader />
            <Prestations />
          </>
        }
      >
        <Title className="text-center">Portfolio</Title>
        <Grid className="pt-36 gap-y-14 sm:gap-y-14 lg:gap-y-14">
          <Posts posts={posts} />
        </Grid>
      </PageContainer>
    </>
  );
}
