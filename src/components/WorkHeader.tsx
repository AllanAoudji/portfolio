import { vollkorn } from '@src/utils/fonts';
import Categories from './Categories';
import Grid from './Grid';
import RichPortableText from './RichPortableText';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-6 px-4 py-14 text-dark sm:col-span-12 md:py-28">
      <Grid>
        <Grid className="auto-rows-max col-span-6 sm:col-span-12 md:col-span-3 md:gap-y-16">
          <div className="col-span-4 sm:col-span-8 sm:text-lg md:col-span-12">
            <div className={`font-bold text-dark ${vollkorn.className}`}>
              <span className="uppercase">Catégories</span>
            </div>
            <Categories categories={post.categories} />
          </div>
          <div className="col-span-2 sm:col-span-4 sm:text-lg md:col-span-12">
            <div className={`font-bold text-dark ${vollkorn.className}`}>
              <span className="uppercase">Année</span>
            </div>
            <span>{post.year}</span>
          </div>
        </Grid>
        <div className="col-span-6 sm:col-span-12 md:col-span-9">
          <h1
            className={`col-span-6 font-black py-6 text-4xl text-dark sm:col-span-12 sm:py-8 sm:text-5xl md:pt-0 md:pb-12 md:text-6xl ${vollkorn.className}`}
          >
            {post.title}
          </h1>
          <div className="col-span-6 flex items-center sm:col-span-12">
            <div>{post.body && <RichPortableText value={post.body} />}</div>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default WorkHeader;
