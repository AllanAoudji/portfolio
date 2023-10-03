import Categories from './Categories';
import LinkImage from './LinkImage';
import RichPortableText from './RichPortableText';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-6 top-0 sm:col-span-12 md:col-span-6 lg:col-span-5">
      <LinkImage
        alt={post.title}
        blurDataURL={post.mainImage.metadata.lqip}
        className="w-full border-4 border-darker"
        height={post.mainImage.metadata.dimensions.height}
        placeholder="blur"
        src={post.mainImage.url}
        width={post.mainImage.metadata.dimensions.width}
      />

      <Categories categories={post.categories} className="py-6" />
      <div className="col-span-10 col-start-2 md:col-span-12">
        {post.body && <RichPortableText value={post.body} />}
      </div>
    </div>
  );
}

export default WorkHeader;
