import HomeHeader from '@src/components/HomeHeader';
import PageContainer from '@src/components/PageContainer';
import Posts from '@src/components/Posts';
import { getPosts } from '@/sanity/sanity.queries';

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
        className="gap-x-6 gap-y-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        drawer={drawer}
        header={<HomeHeader />}
      >
        <Posts posts={posts} />
      </PageContainer>
    </>
  );
}
