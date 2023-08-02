'use client';

import { useLiveQuery } from '@sanity/preview-kit';
import Posts from './Posts';
import { postsQuery } from '@/sanity/queries';

export default function PreviewPosts({ posts = [] }: { posts: Post[] }) {
  const [data] = useLiveQuery<Post[]>(posts, postsQuery);

  return <Posts posts={data} />;
}
