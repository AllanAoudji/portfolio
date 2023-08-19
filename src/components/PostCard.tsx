import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  return (
    <div className="overflow-hidden col-span-1" key={post._id}>
      <div className="relative pb-5/12 bg-light">
        {post.mainImage && post.mainImage.url && (
          <Link href={`/work/${post.slug}`}>
            <Image
              alt={post.mainImage.alt || post.title}
              className="absolute top-0 h-full w-full object-cover"
              height={300}
              src={post.mainImage.url}
              width={200}
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default PostCard;
