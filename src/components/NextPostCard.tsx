import { getFirstPost } from '@/sanity/sanity.queries';
import { bodoniModa } from '@src/utils/fonts';
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
      className="block text-dark border-t-2 border-dark pt-20 text-3xl"
      href={`/work/${post.slug}`}
    >
      <div>
        <span>Prochain post :</span>
      </div>
      <div>
        <span className={`${bodoniModa.className} uppercase font-bold`}>
          {post.title}
        </span>
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
