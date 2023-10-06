import { vollkorn } from '@src/utils/fonts';
import Categories from './Categories';
import Grid from './Grid';
import RichPortableText from './RichPortableText';

type Props = {
  post: Post;
};

function WorkHeader({ post }: Props) {
  return (
    <div className="col-span-6 px-4 py-14 text-dark sm:col-span-12 md:py-32">
      <Grid className="md:gap-y-2 lg:gap-y-2">
        <h1
          className={`font-black hidden text-4xl text-dark uppercase md:col-span-10 md:col-start-3 md:block md:pt-0 ${vollkorn.className}`}
        >
          {post.title}
        </h1>
        <Grid className="auto-rows-max col-span-6 text-sm sm:col-span-12 md:col-span-2 md:gap-x-0 lg:gap-x-0">
          <div className="col-span-4 sm:col-span-8 md:col-span-12">
            <div className={`font-bold text-dark ${vollkorn.className}`}>
              <span className="uppercase">Catégories</span>
            </div>
            <Categories categories={post.categories} />
          </div>
          <div className="col-span-2 sm:col-span-4 md:col-span-12">
            <div className={`font-bold text-dark ${vollkorn.className}`}>
              <span className="uppercase">Année</span>
            </div>
            <span>{post.year}</span>
          </div>
        </Grid>
        <div className="col-span-6 sm:col-span-12 md:col-span-10">
          <h1
            className={`col-span-6 font-black py-6 text-4xl text-dark uppercase sm:col-span-12 sm:py-8 md:hidden md:pt-0 ${vollkorn.className}`}
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
