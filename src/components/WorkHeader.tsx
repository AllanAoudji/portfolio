import Categories from './Categories';
import LinkImage from './LinkImage';
import Title from './Title';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="px-6">
      <Title className="pt-28 text-2xl">
        {post.title + ' '}
        {post.year && (
          <span className="font-light">
            {new Date(post.year).getFullYear()}
          </span>
        )}
      </Title>

      <LinkImage
        alt={post.title}
        className="rounded-2xl w-full overflow-hidden mt-4"
        height="1200"
        src={post.mainImage.url}
        width="1200"
      />

      <Categories categories={post.categories} />
    </div>
  );
}

export default WorkHeader;
