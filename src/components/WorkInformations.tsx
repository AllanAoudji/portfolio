import Container from './Container';
import Grid from './Grid';
import RichPortableText from './RichPortableText';

type Props = {
  post: Post;
};

type PropsCategories = {
  categories:
    | {
        name: string;
        title: string;
        slug: string;
      }[]
    | null;
  className?: string;
};

type PropsInformationText = {
  children: React.ReactNode;
};

type PropsInformationTitle = {
  children: React.ReactNode;
};

type PropsYear = {
  year: number;
  className?: string;
};

const categoriesDisplayer = (
  categories: {
    name: string;
    title: string;
    slug: string;
  }[]
) => {
  return categories.map((categorie) => categorie.name).join(', ');
};

function Categories({ categories, className = '' }: PropsCategories) {
  if (!categories || !categories.length) {
    return null;
  }

  return (
    <div className={className}>
      <InformationTitle>
        catégorie{categories.length > 1 && 's'}
      </InformationTitle>
      <InformationText>{categoriesDisplayer(categories)}</InformationText>
    </div>
  );
}

function InformationText({ children }: PropsInformationText) {
  return <p className="italic text-sm sm:text-base md:text-base">{children}</p>;
}

function InformationTitle({ children }: PropsInformationTitle) {
  return (
    <h2 className="text-base uppercase sm:text-lg md:text-xl">{children}</h2>
  );
}

function Year({ className = '', year }: PropsYear) {
  return (
    <div className={className}>
      <InformationTitle>année</InformationTitle>
      <InformationText>{year}</InformationText>
    </div>
  );
}

function WorkInformations({ post }: Props) {
  return (
    <Container className="pb-16 sm:pb-24 md:pb-32">
      <Grid className="mt-[100vh]">
        <Categories
          categories={post.categories}
          className="col-span-4 sm:hidden"
        />
        <Year className="col-span-2 sm:hidden" year={post.year} />
        <h1 className="col-span-6 py-8 text-2xl uppercase sm:col-span-9 sm:col-start-4 sm:pt-0 sm:text-3xl md:text-4xl">
          {post.title}
        </h1>
        <div className="hidden col-span-3 sm:block">
          <Categories categories={post.categories} className="pb-2" />
          <Year year={post.year} />
        </div>
        {post.body && (
          <div className="col-span-6 sm:col-span-9 sm:col-start-4">
            <RichPortableText value={post.body} />
          </div>
        )}
      </Grid>
    </Container>
  );
}

export default WorkInformations;
