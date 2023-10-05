import { vollkorn } from '@src/utils/fonts';
import Categories from './Categories';
import Grid from './Grid';
import RichPortableText from './RichPortableText';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-6 sm:col-span-12 text-dark py-14 px-4">
      <Grid>
        <div className="col-span-4">
          <div
            className={`font-bold text-darker text-base ${vollkorn.className}`}
          >
            <span>Catégories</span>
          </div>
          <Categories categories={post.categories} />
        </div>
        <div className="col-span-2">
          <div
            className={`font-bold text-darker text-base ${vollkorn.className}`}
          >
            <span>Année</span>
          </div>
          <span>{post.year}</span>
        </div>
        <h1
          className={`text-4xl col-span-6 sm:col-span-12 text-dark font-black py-6 ${vollkorn.className}`}
        >
          {post.title}
        </h1>
        <div className="col-span-6 flex items-center sm:col-span-7 sm:pl-8 sm:py-8">
          <div>{post.body && <RichPortableText value={post.body} />}</div>
        </div>
      </Grid>
    </div>
  );
}

export default WorkHeader;
