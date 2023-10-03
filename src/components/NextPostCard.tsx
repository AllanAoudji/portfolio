import { getFirstPost } from '@/sanity/sanity.queries';
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
      className="block text-dark text-xl text-right uppercase pt-6"
      href={`/work/${post.slug}`}
    >
      <div>
        <span>Projet suivant {'>'}</span>
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
