import { PortableTextBlock } from 'sanity';

declare global {
  type Post = {
    _id: string;
    _createdAt: Date;
    content: PortableTextBlock[];
    image: string;
    name: string;
    slug: string;
    url: string;
  };
}
