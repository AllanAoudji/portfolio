import Categories from './Categories';
import LinkImage from './LinkImage';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-1 top-0 sm:col-span-3 sm:sticky">
      <LinkImage
        alt={post.title}
        className="overflow-hidden rounded-2xl w-full"
        height="1200"
        src={post.mainImage.url}
        width="1200"
      />

      <Categories categories={post.categories} />
    </div>
  );
}

export default WorkHeader;
