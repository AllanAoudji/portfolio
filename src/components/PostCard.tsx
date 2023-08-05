import Image from 'next/image';

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  return (
    <div className="rounded-lg overflow-hidden bg-white" key={post._id}>
      {post.mainImage && post.mainImage.url && (
        <Image
          alt={post.mainImage.alt || post.title}
          className="object-contain object-center"
          height={300}
          src={post.mainImage.url}
          width={200}
        />
      )}
    </div>
  );
}

export default PostCard;
