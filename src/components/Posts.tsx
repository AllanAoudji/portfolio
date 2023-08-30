'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import helloWorld from '@/public/hello-world-light.png';
import { getPosts, getPostsByCategory } from '@/sanity/sanity.queries';
import useScrollPosition from '@src/hooks/useScrollPosition';

import PostCard from './PostCard';

type Props = {
  categorySlug?: string | null;
  posts: Post[];
  showHeaderText?: boolean;
};

function Posts({
  categorySlug = null,
  posts: initialPost,
  showHeaderText = true,
}: Props) {
  const [lastPublishedAt, setLastPublishedAt] = useState<string>('');
  const [lastSlug, setLastSlug] = useState<string | null>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>(initialPost);

  const initaleFetchingRef = useRef<boolean>(true);
  const mountedRef = useRef<boolean>(true);

  const scrollPosition = useScrollPosition();

  const postsGetter = useCallback(async () => {
    if (lastSlug == null) return;

    setLoading(true);

    let result: Post[];

    if (categorySlug) {
      result = await getPostsByCategory(
        lastPublishedAt,
        lastSlug,
        categorySlug
      );
    } else {
      result = await getPosts(lastPublishedAt, lastSlug);
    }

    if (!mountedRef.current) return;

    setPosts((prevState) => [...prevState, ...result]);
    if (result.length > 20) {
      setLastSlug(result[result.length - 1].slug);
      setLastPublishedAt(result[result.length - 1].publishedAt);
    } else {
      setLastSlug(null);
    }

    setLoading(false);
  }, [categorySlug, lastPublishedAt, lastSlug]);

  // initial post fetching
  // only trigger on mount
  useEffect(() => {
    if (!initaleFetchingRef.current) {
      return;
    }
    if (posts.length > 20) {
      setLastSlug(posts[posts.length - 1].slug);
      setLastPublishedAt(posts[posts.length - 1].publishedAt);
    } else {
      setLastSlug(null);
    }
    initaleFetchingRef.current = false;
  }, [posts]);

  // fetch next post if scroll to bottom
  useEffect(() => {
    if (scrollPosition && scrollPosition > 80 && !loading) {
      postsGetter();
    }
  }, [loading, scrollPosition, postsGetter]);

  // dismount before async call finished
  useEffect(
    () => () => {
      mountedRef.current = false;
    },
    []
  );

  return (
    <>
      {showHeaderText && (
        <Image
          alt="home-text"
          className="mb-36 sm:col-span-2 sm:mb-0 sm:pr-28"
          src={helloWorld}
        />
      )}
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </>
  );
}

export default Posts;
