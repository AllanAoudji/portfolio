import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

function Posts({ posts }: Props) {
  return (
    <section className="flex gap-3 flex-wrap">
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </section>
  );
}

export default Posts;
