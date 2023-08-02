'use client';

import { useLiveQuery } from '@sanity/preview-kit';
import Posts from './Posts';
import { postsQuery } from '@/sanity/queries';

type Props = {
  posts: Post[];
};

export default function PreviewPosts({ posts = [] }: Props) {
  const [data] = useLiveQuery<Post[]>(posts, postsQuery);

  return <Posts posts={data} />;
}
