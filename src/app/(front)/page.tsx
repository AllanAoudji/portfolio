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
  const posts = await getPosts('', '');
  console.log(posts.map((post) => post.mainImage.metadata.dimensions));

  return (
    <>
      <PageContainer
        className="gap-3 grid grid-cols-1 items-end sm:grid-cols-3"
        drawer={drawer}
        header={<HomeHeader />}
      >
        <Posts posts={posts} />
      </PageContainer>
    </>
  );
}
