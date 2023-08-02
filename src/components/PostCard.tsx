import Image from 'next/image';

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  return (
    <div className="rounded-lg overflow-hidden bg-white" key={post._id}>
      {post.image && (
        <Image
          alt={post.name}
          className="object-contain object-center"
          height={300}
          src={post.image}
          width={200}
        />
      )}
    </div>
  );
}

export default PostCard;
