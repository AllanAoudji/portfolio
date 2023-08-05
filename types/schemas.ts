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
    slug: string;
    title: string;
  };

  type Page = {
    _id: string;
    _createdAt: Date;
    body: PortableTextBlock[] | null;
    image: string;
    name: string;
    slud: string;
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
          title: string;
          slug: string;
        }[]
      | null;
    mainImage: {
      url: string;
      alt: string;
    };
    publishedAt: Date | null;
    slug: string;
    title: string;
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
