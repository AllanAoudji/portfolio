import { vollkorn } from '@src/utils/fonts';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: Post;
  showCategories?: boolean;
};

function PostCard({ post, showCategories = true }: Props) {
  return (
    <Link
      className="col-span-6 flex flex-col md:col-span-4 [&_img]:hover:scale-125 lg:col-span-3 [&>*:first-child]:hover:scale-90 [&>*:first-child]:hover:rounded-lg"
      href={`/work/${post.slug}`}
    >
      {post.mainImage && post.mainImage.url && (
        <div className="duration-500 overflow-hidden transition-all">
          <Image
            alt={post.mainImage.alt || post.title}
            blurDataURL={post.mainImage.metadata.lqip}
            className="duration-500 h-full object-cover top-0 transition w-full"
            height={post.mainImage.metadata.dimensions.height}
            placeholder="blur"
            src={post.mainImage.url}
            width={post.mainImage.metadata.dimensions.width}
          />
        </div>
      )}
      {!!post.categories && showCategories && (
        <div className="text-dark text-sm border-b-2 border-darker py-2">
          {post.categories.slice(0, 2).map((category, index) => (
            <span key={category.slug}>
              {category.name}
              {!!post.categories && index === post.categories.length - 1
                ? ''
                : ', '}
            </span>
          ))}
          {post.categories.length > 2 && (
            <span>+{post.categories.length - 2}</span>
          )}
        </div>
      )}
      <div className="pt-3 grow">
        <h3
          className={`font-bold text-dark text-3xl uppercase sm:text-2xl ${vollkorn.className}`}
        >
          {post.title} <span className="text-xl">{post.year}</span>
        </h3>
      </div>
    </Link>
  );
}

export default PostCard;
