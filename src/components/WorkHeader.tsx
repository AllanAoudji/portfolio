import { vollkorn } from '@src/utils/fonts';
import Categories from './Categories';
import Grid from './Grid';
import RichPortableText from './RichPortableText';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-6 px-4 py-14 text-dark sm:col-span-12">
      <Grid>
        <div className="col-span-4 sm:col-span-8">
          <div className={`font-bold text-dark ${vollkorn.className}`}>
            <span className="uppercase">Catégories</span>
          </div>
          <Categories categories={post.categories} />
        </div>
        <div className="col-span-2 sm:col-span-4">
          <div className={`font-bold text-dark ${vollkorn.className}`}>
            <span className="uppercase">Année</span>
          </div>
          <span>{post.year}</span>
        </div>
        <h1
          className={`col-span-6 font-black py-6 text-4xl text-dark sm:col-span-12 sm:py-8 ${vollkorn.className}`}
        >
          {post.title}
        </h1>
        <div className="col-span-6 flex items-center sm:col-span-12">
          <div>{post.body && <RichPortableText value={post.body} />}</div>
        </div>
      </Grid>
    </div>
  );
}

export default WorkHeader;
