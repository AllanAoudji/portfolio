import Image from 'next/image';

type Props = {
  className?: string;
  posts: Post[];
  hoverId: string | null;
};

function HomePortfolioImage({ className = '', posts, hoverId }: Props) {
  return (
    <div
      className={`absolute flex inset-0 items-center bg-center ${className}`}
    >
      {posts.map((post) => (
        <div className="absolute h-full inset-0 w-full" key={post._id}>
          <Image
            alt={post.mainImage.url ?? post.title}
            className={`duration-1000 ease-in-out object-center object-contain p-16 pointer-events-none transition-all sm:p-32 ${
              hoverId === post._id
                ? 'opacity-50 scale-[1.01]'
                : 'opacity-0 scale-100'
            }`}
            fill={true}
            src={post.mainImage.url}
          />
        </div>
      ))}
    </div>
  );
}

export default HomePortfolioImage;
