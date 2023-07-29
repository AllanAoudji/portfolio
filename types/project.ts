import { PortableTextBlock } from 'sanity';

declare global {
  type Project = {
    _id: string;
    _createdAt: Date;
    content: PortableTextBlock[];
    image: string;
    name: string;
    slug: string;
    url: string;
  };
}
