import Categories from './Categories';
import LinkImage from './LinkImage';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-1 top-0 sm:col-span-3">
      <LinkImage
        alt={post.title}
        blurDataURL={post.mainImage.metadata.lqip}
        className="overflow-hidden rounded-2xl w-full"
        height={post.mainImage.metadata.dimensions.height}
        placeholder="blur"
        src={post.mainImage.url}
        width={post.mainImage.metadata.dimensions.width}
      />

      <Categories categories={post.categories} />
    </div>
  );
}

export default WorkHeader;
