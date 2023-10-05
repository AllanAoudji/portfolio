import Categories from './Categories';
import Grid from './Grid';
import RichPortableText from './RichPortableText';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-6 sm:col-span-12">
      <Grid className="border-b-4 border-t-4 border-dark pb-8 sm:pr-8 sm:py-0">
        <div className="text-dark border-b-4 border-dark col-span-6 py-8 text-lg sm:border-b-0 sm:border-r-4 sm:col-span-5 sm:pr-8 sm:py-8">
          <span>{post.year}</span>
          <Categories categories={post.categories} className="uppercase" />
        </div>
        <div className="col-span-6 flex items-center pt-8 sm:col-span-7 sm:pl-8 sm:py-8">
          <div>{post.body && <RichPortableText value={post.body} />}</div>
        </div>
      </Grid>
    </div>
  );
}

export default WorkHeader;
