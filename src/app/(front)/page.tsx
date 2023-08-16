import { getPosts } from '@/sanity/sanity.queries';
import Posts from '@src/components/Posts';

export default async function Home() {
  const posts = await getPosts('', '');
  return <Posts posts={posts} />;
}
