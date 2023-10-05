import Categories from './Categories';
import Grid from './Grid';
import RichPortableText from './RichPortableText';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-6 sm:col-span-12">
      <Grid>
        <div className="col-span-6">
          {post.body && <RichPortableText value={post.body} />}
        </div>
        <div className="col-start-8 col-span-3">
          <div className="text-dark font-black">
            <span>Année</span>
          </div>
          <span className="text-dark">{post.year}</span>
          <div className="text-dark font-black">
            <span>Catégories</span>
          </div>
          <Categories categories={post.categories} className="uppercase" />
        </div>
      </Grid>
    </div>
  );
}

export default WorkHeader;
