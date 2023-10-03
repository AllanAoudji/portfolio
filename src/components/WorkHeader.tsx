import Categories from './Categories';
import LinkImage from './LinkImage';
import RichPortableText from './RichPortableText';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-6 top-0 sm:col-span-12 md:pb-0 md:col-span-6 lg:col-span-5">
      <LinkImage
        alt={post.title}
        blurDataURL={post.mainImage.metadata.lqip}
        className="w-full"
        height={post.mainImage.metadata.dimensions.height}
        placeholder="blur"
        src={post.mainImage.url}
        width={post.mainImage.metadata.dimensions.width}
      />
      <div className="pt-6">
        <span className="font-black text-dark text-2xl">{post.year}</span>
      </div>
      <Categories categories={post.categories} className="uppercase text-2xl" />
      <div className="col-span-10 col-start-2 md:col-span-12">
        {post.body && <RichPortableText value={post.body} />}
      </div>
    </div>
  );
}

export default WorkHeader;
