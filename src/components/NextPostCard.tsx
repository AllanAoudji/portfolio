import { getFirstPost } from '@/sanity/sanity.queries';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  className?: string;
  nextPost: NextPost | null;
};

type LinkImageProps = {
  post: NextPost;
};

function LinkImage({ post }: LinkImageProps) {
  return (
    <Link
      className="block relative pb-7/12 bg-dark"
      href={`/work/${post.slug}`}
    >
      {post.mainImage && post.mainImage.url && (
        <Image
          alt={post.mainImage.alt || post.title}
          className="absolute top-0 h-full w-full object-cover brightness-50"
          height={300}
          src={post.mainImage.url}
          width={200}
        />
      )}
      <div className="absolute w-full h-full p-3">
        <div className="h-full border-4 border-light p-2">
          <div className="h-full border-4 border-light">
            <h3 className="absolute z-10 top-[51%] left-[51%] transform -translate-x-1/2 -translate-y-1/2 w-full text-dark text-6xl text-center font-black">
              Next post
            </h3>
            <h3 className="absolute z-10 top-[49%] left-[49%] transform -translate-x-1/2 -translate-y-1/2 w-full text-light text-6xl text-center font-black">
              Next post
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

async function NextPostCard({ className = '', nextPost }: Props) {
  if (!nextPost) {
    const firstPost = await getFirstPost();
    return (
      <div className={className}>
        <LinkImage post={firstPost} />
      </div>
    );
  }

  return (
    <div className={className}>
      <LinkImage post={nextPost} />
    </div>
  );
}

export default NextPostCard;
