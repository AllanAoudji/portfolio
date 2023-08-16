'use client';

import Posts from './Posts';

type Props = {
  posts: Post[];
};

export default function PreviewPosts({ posts }: Props) {
  return <Posts posts={posts} />;
}
