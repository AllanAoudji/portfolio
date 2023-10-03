import author from './author-schema';
import blockContent from './blockContent-schema';
import category from './category-schema';
import post from './post-schema';
import social from './social-schema';
import page from './page-schema';
import blockContentPost from './blockContentPost-schema';

const schemas = [
  post,
  author,
  category,
  social,
  page,
  blockContent,
  blockContentPost,
];

export default schemas;
