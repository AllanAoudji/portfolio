import { getLastPost } from '@/sanity/sanity.queries';
import WorkPostLink from './WorkPostLink';

type Props = {
  className?: string;
  previousPost: NextPost | null;
};

async function PreviousPostCard({ className = '', previousPost }: Props) {
  if (!previousPost) {
    const lastPost = await getLastPost();
    return (
      <WorkPostLink className={className} href={lastPost.slug}>
        projet précédent
      </WorkPostLink>
    );
  }

  return (
    <WorkPostLink className={className} href={previousPost.slug}>
      projet précédent
    </WorkPostLink>
  );
}

export default PreviousPostCard;
