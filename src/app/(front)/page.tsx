import { getPosts } from '@/sanity/sanity.queries';
import HomeHeader from '@src/components/HomeHeader';
import PageContainer from '@src/components/PageContainer';
import Posts from '@src/components/Posts';

type Props = {
  searchParams: {
    drawer: string | undefined;
  };
};

export default async function Home({ searchParams: { drawer } }: Props) {
  const posts = await getPosts('', '');
  return (
    <>
      <PageContainer
        className="grid grid-cols-1 gap-3 items-end sm:grid-cols-3"
        drawer={drawer}
        header={<HomeHeader />}
      >
        <Posts posts={posts} />
      </PageContainer>
    </>
  );
}
