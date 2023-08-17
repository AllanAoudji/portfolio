import { getPosts } from '@/sanity/sanity.queries';
import DrawerContainer from '@src/components/DrawerContainer';
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
      <DrawerContainer open={drawer === 'true' ? true : false} />
      <Posts posts={posts} />
    </>
  );
}
