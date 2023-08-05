import { draftMode } from 'next/headers';
import { getPosts } from '@/sanity/sanity.queries';
import PreviewProvider from '@src/components/PreviewProvider';
import PreviewPosts from '@src/components/PreviewPosts';
import Posts from '@src/components/Posts';

export default async function Home() {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const posts = await getPosts();

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }

  return <Posts posts={posts} />;
}
