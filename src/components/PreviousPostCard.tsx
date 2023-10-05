import { getLastPost } from '@/sanity/sanity.queries';
import Link from 'next/link';

type Props = {
  className?: string;
  previousPost: NextPost | null;
};

type LinkImageProps = {
  post: NextPost;
};

function LinkPost({ post }: LinkImageProps) {
  return (
    <Link
      className="block text-light text-right uppercase pt-6"
      href={`/work/${post.slug}`}
    >
      <div>
        <span>Projet précédent</span>
      </div>
    </Link>
  );
}

async function PreviousPostCard({ className = '', previousPost }: Props) {
  if (!previousPost) {
    const lastPost = await getLastPost();
    return (
      <div className={className}>
        <LinkPost post={lastPost} />
      </div>
    );
  }

  return (
    <div className={className}>
      <LinkPost post={previousPost} />
    </div>
  );
}

export default PreviousPostCard;
