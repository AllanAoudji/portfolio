import { getFirstPost } from '@/sanity/sanity.queries';
import WorkPostLink from './WorkPostLink';

type Props = {
  className?: string;
  nextPost: NextPost | null;
};

async function NextPostCard({ className = '', nextPost }: Props) {
  if (!nextPost) {
    const firstPost = await getFirstPost();
    return (
      <WorkPostLink className={className} href={firstPost.slug}>
        projet suivant
      </WorkPostLink>
    );
  }

  return (
    <WorkPostLink className={className} href={nextPost.slug}>
      projet suivant
    </WorkPostLink>
  );
}

export default NextPostCard;
