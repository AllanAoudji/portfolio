import { getFirstPost } from '@/sanity/sanity.queries';
import Link from 'next/link';

type Props = {
  className?: string;
  nextPost: NextPost | null;
};

type LinkProps = {
  post: NextPost;
};

function LinkPost({ post }: LinkProps) {
  return (
    <Link className="block text-right uppercase" href={`/work/${post.slug}`}>
      <div>
        <span>Projet suivant</span>
      </div>
    </Link>
  );
}

async function NextPostCard({ className = '', nextPost }: Props) {
  if (!nextPost) {
    const firstPost = await getFirstPost();
    return (
      <div className={className}>
        <LinkPost post={firstPost} />
      </div>
    );
  }

  return (
    <div className={className}>
      <LinkPost post={nextPost} />
    </div>
  );
}

export default NextPostCard;
