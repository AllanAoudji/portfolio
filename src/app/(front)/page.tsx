import HomeHeader from '@src/components/HomeHeader';
import PageContainer from '@src/components/PageContainer';
import Posts from '@src/components/Posts';
import { getPosts } from '@/sanity/sanity.queries';
import Grid from '@src/components/Grid';
import Prestations from '@src/components/Prestations';
import Title from '@src/components/Title';
import Wrapper from '@src/components/Wrapper';
import HomeContactForm from '@src/components/HomeContactForm';
import Footer from '@src/components/Footer';
import FormsContainer from '@src/components/FormsContainer';

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
          <div className="relative bg-darker">
            <HomeHeader />
            <Prestations />
            <FormsContainer />
          </div>
        }
        footer={
          <>
            <Wrapper>
              <HomeContactForm />
            </Wrapper>
            <Footer />
          </>
        }
      >
        <Title className="py-14 text-center sm:py-20 md:py-28">Portfolio</Title>
        <Grid className="gap-y-14 sm:gap-y-14 lg:gap-y-14">
          <Posts posts={posts} />
        </Grid>
      </PageContainer>
    </>
  );
}
