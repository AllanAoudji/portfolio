import Link from 'next/link';

type Props = {
  className?: string;
  hoverId: string | null;
  posts: Post[];
  setCurrentWork: (workId: string) => void;
  unsetCurrentWork: () => void;
};

function HomePortfolioItem({
  className = '',
  hoverId,
  posts,
  setCurrentWork,
  unsetCurrentWork,
}: Props) {
  return (
    <p className={`italic ${className}`}>
      {posts.map((post, i) => (
        <span key={post._id}>
          <Link
            className={`cursor-pointer duration-500 ease-in-out transition-opacity ${
              hoverId !== null && hoverId !== post._id && 'opacity-0'
            }`}
            href={`/work/${post.slug}`}
            onMouseEnter={() => setCurrentWork(post._id)}
            onMouseLeave={unsetCurrentWork}
            onMouseDown={() => setCurrentWork(post._id)}
            onMouseUp={unsetCurrentWork}
          >
            {post.title}
          </Link>
          {i !== posts.length - 1 && (
            <span
              className={`duration-500 ease-in-out transition-opacity ${
                hoverId !== null && 'opacity-0'
              }`}
            >
              ,{' '}
            </span>
          )}
        </span>
      ))}
    </p>
  );
}

export default HomePortfolioItem;
