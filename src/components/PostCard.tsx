import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  return (
    <div className="col-span-1 overflow-hidden rounded-xl" key={post._id}>
      <div className="pb-7/12 relative sm:pb-11/12">
        {post.mainImage && post.mainImage.url && (
          <Link href={`/work/${post.slug}`}>
            <Image
              alt={post.mainImage.alt || post.title}
              className="absolute top-0 h-full w-full object-cover hover:scale-150 transition duration-1000"
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
