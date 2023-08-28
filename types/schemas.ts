import { PortableTextBlock } from 'sanity';

declare global {
  type Author = {
    _id: string;
    _createdAt: Date;
    bio: PortableTextBlock[] | null;
    email: string | null;
    name: string;
    profilePicture: string | null;
  };

  type Category = {
    _id: string;
    _createdAt: Date;
    description: string | null;
    name: string;
    posts: Post[];
    slug: string;
    title: string;
  };

  type NextPost = {
    mainImage: {
      alt: string;
      url: string;
    };
    slug: string;
    title: string;
  };

  type Page = {
    _id: string;
    _createdAt: Date;
    body: PortableTextBlock[] | null;
    name: string;
    slug: string;
  };

  type Post = {
    _id: string;
    _createdAt: Date;
    author: {
      name: string;
      slug: string;
      profilePicture: string | null;
    };
    body: PortableTextBlock[] | null;
    categories:
      | {
          name: string;
          title: string;
          slug: string;
        }[]
      | null;
    mainImage: {
      url: string;
      alt: string;
    };
    nextPost: NextPost | null;
    publishedAt: string;
    slug: string;
    title: string;
    year?: string;
  };

  type Social = {
    _id: string;
    _createdAt: Date;
    logo: string;
    title: string;
    slug: string;
    url: string;
  };
}
