import PostCard from './PostCard';

function Posts({ posts }: { posts: Post[] }) {
  return (
    <section className="flex gap-3 flex-wrap">
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </section>
  );
}

export default Posts;
