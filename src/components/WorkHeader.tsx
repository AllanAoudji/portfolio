import Categories from './Categories';
import LinkImage from './LinkImage';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-6 top-0 sm:col-span-12 md:col-span-5">
      <LinkImage
        alt={post.title}
        blurDataURL={post.mainImage.metadata.lqip}
        className="w-full"
        height={post.mainImage.metadata.dimensions.height}
        placeholder="blur"
        src={post.mainImage.url}
        width={post.mainImage.metadata.dimensions.width}
      />

      <Categories categories={post.categories} className="py-4 font-bold" />
    </div>
  );
}

export default WorkHeader;
