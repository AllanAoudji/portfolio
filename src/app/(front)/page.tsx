import { getPosts } from '@/sanity/sanity.queries';
import BackgroundColor from '@src/components/BackgroundColor';
import HomeFooter from '@src/components/HomeFooter';
import HomeHeader from '@src/components/HomeHeader';
import HomePortfolio from '@src/components/HomePortfolio';

export default async function Home() {
  const posts = await getPosts(Number.MAX_SAFE_INTEGER, '');

  return (
    <BackgroundColor variant="light">
      <HomeHeader />
      <HomePortfolio posts={posts} />
      <HomeFooter />
    </BackgroundColor>
  );
}
