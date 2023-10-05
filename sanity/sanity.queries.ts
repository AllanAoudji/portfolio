import { groq } from 'next-sanity';
import { getCachedClient } from './lib/getClient';

// ---------------------------------
// Author
// ---------------------------------
// Get all authors
const authorsQuery = groq`*[_type == "author" && slug.current > $lastSlug] | order(slug.current) [0...30] {
  _id,
  _createdAt,
  bio,
  email,
  name,
  "profilePicture": profilePicture.asset->url,
  "slug": slug.current,
}`;
export const getAuthors = (lastSlug: string) =>
  getCachedClient()<Author[]>(authorsQuery, { lastSlug });

// Get a single author by its slug
const authorQuery = groq`*[_type == "author" && slug.current == $slug][0] {
  _id,
  _createdAt,
  bio,
  email,
  name,
  "profilePicture": profilePicture.asset->url,
  "slug": slug.current,
}`;
export const getAuthor = (slug: string) =>
  getCachedClient()<Author>(authorQuery, { slug });

// ---------------------------------
// Category
// ---------------------------------
// Get all categories
const categoriesQuery = groq`*[_type == "category" && slug.current > $lastSlug] | order(slug.current) [0...15] {
  _id,
  _createdAt,
  description,
  name,
  title,
  "posts": *[
    _type == "post" &&
    ^.slug.current in categories[]->slug.current &&
    publishedAt <= $now &&
    (year < $lastYear ||
    (year == $lastYear && slug.current > $lastPostSlug))
  ] | order(year desc, slug.current) [0...15]{
    _id,
    _createdAt,
    body,
    gallery[]{
      "url": asset->url,
      "metadata": asset->metadata,
      alt,
    },
    publishedAt,
    title,
    year,
    "author": {
      "name": author->name,
      "profilePicture": author->profilePicture.asset->url,
      "slug": author->slug.current,
    },
    "categories": categories[]->{
      "slug": slug.current,
      title,
    },
    "mainImage" : {
      "alt": mainImage.alt,
      "metadata": mainImage.asset->metadata,
      "url": mainImage.asset->url,
    },
    "slug": slug.current,
  },
  "slug": slug.current,
}`;
export const getCategories = (
  lastSlug: string,
  lastYear: string,
  lastPostSlug: string
) => {
  const now = new Date().toISOString();
  return getCachedClient()<Category[]>(categoriesQuery, {
    lastYear,
    lastPostSlug,
    lastSlug,
    now,
  });
};

// Get a single category by its slug
const categoryQuery = groq`*[_type == "category" && slug.current == $slug][0] {
  _id,
  _createdAt,
  description,
  name,
  title,
  "posts": *[
    _type == "post" &&
    ^.slug.current in categories[]->slug.current &&
    publishedAt <= $now &&
    (year < $lastYear ||
    (year == $lastYear && slug.current > $lastPostSlug))
  ] | order(year desc, slug.current) [0...15]{
    _id,
    _createdAt,
    body,
    gallery[]{
      "url": asset->url,
      "metadata": asset->metadata,
      alt,
    },
    publishedAt,
    title,
    year,
    "author": {
      "name": author->name,
      "profilePicture": author->profilePicture.asset->url,
      "slug": author->slug.current,
    },
    "categories": categories[]->{
      title,
      "slug": slug.current,
    },
    "slug": slug.current,
    "mainImage" : {
      "alt": mainImage.alt,
      "metadata": mainImage.asset->metadata,
      "url": mainImage.asset->url,
    },
  },
  "slug": slug.current,
}`;
export const getCategory = (
  slug: string,
  lastYear: number,
  lastPostSlug: string
) => {
  const now = new Date().toISOString();
  return getCachedClient()<Category>(categoryQuery, {
    lastYear,
    lastPostSlug,
    now,
    slug,
  });
};

// ---------------------------------
// Page
// ---------------------------------
// Get all pages
const pagesQuery = groq`*[_type == "page"] | order(order asc, name asc) [0...15] {
  _id,
  _createdAt,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "url": asset->url,
      "metadata": asset->metadata,
      alt,
    }
  },
  name,
  "slug": slug.current,
}`;
export const getPages = () => getCachedClient()<Page[]>(pagesQuery);

// Get a page by its slug
const pageQuery = groq`*[_type == "page" && slug.current == $slug][0] {
  _id,
  _createdAt,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "url": asset->url,
      "metadata": asset->metadata,
      alt,
    }
  },
  name,
  "slug": slug.current,
}`;
export const getPage = (slug: string) =>
  getCachedClient()<Page>(pageQuery, { slug });

// ---------------------------------
// Post
// ---------------------------------
// Get all posts
const postsQuery = groq`*[
  _type == "post" &&
  publishedAt <= $now &&
  (year < $lastYear ||
  (year == $lastYear && slug.current < $lastSlug))
] | order(year desc, slug.current asc) [0...15] {
  _id,
  _createdAt,
  body,
  gallery[]{
    "url": asset->url,
    "metadata": asset->metadata,
    alt,
  },
  publishedAt,
  title,
  year,
  "previousPost": *[
    _type == "post" &&
    (year > ^.year ||
      (year == ^.year && slug.current < ^.slug.current))
  ] | order(year, slug.current desc) [0] {
    title,
    "mainImage": {
      "alt": mainImage.alt,
      "metadata": mainImage.asset->metadata,
      "url": mainImage.asset->url,
    },
    "slug": slug.current,
  },
  "nextPost": *[
    _type == "post" &&
    (year < ^.year ||
    (year == ^.year && slug.current > ^.slug.current))
  ] | order(year desc, slug.current) [0]{
    title,
    "mainImage": {
      "alt": mainImage.alt,
      "metadata": mainImage.asset->metadata,
      "url": mainImage.asset->url,
    },
    "slug": slug.current,
  },
  "author": {
    "name": author->name,
    "profilePicture": author->profilePicture.asset->url,
    "slug": author->slug.current,
  },
  "categories": categories[]->{
    name,
    title,
    "slug": slug.current,
  },
  "mainImage" : {
    "alt": mainImage.alt,
    "metadata": mainImage.asset->metadata,
    "url": mainImage.asset->url,
  },
  "slug": slug.current,
}`;
export const getPosts = (lastYear: number, lastSlug: string) => {
  const now = new Date().toISOString();
  return getCachedClient()<Post[]>(postsQuery, {
    lastYear,
    lastSlug,
    now,
  });
};

// Get all posts filtered by category
const postsByCategoryQuery = groq`*[
  _type == "post" &&
  $categorySlug in categories[]->slug.current &&
  publishedAt <= $now &&
  (year < $lastYear ||
  (year == $lastYear && slug.current > $lastSlug))
] | order(year deas, slug.current) [0...15] {
  _id,
  _createdAt,
  body,
  gallery[]{
    "url": asset->url,
    "metadata": asset->metadata,
    alt,
  },
  title,
  year,
  publishedAt,
  "slug": slug.current,

  "previousPost": *[
    _type == "post" &&
    (year > ^.year ||
      (year == ^.year && slug.current < ^.slug.current))
  ] | order(year, slug.current desc) [0] {
    title,
    "mainImage": {
      "alt": mainImage.alt,
      "metadata": mainImage.asset->metadata,
      "url": mainImage.asset->url,
    },
    "slug": slug.current,
  },
  "nextPost": *[
    _type == "post" &&
    (year < ^.year ||
    (year == ^.year && slug.current > ^.slug.current))
  ] | order(year desc, slug.current) [0] {
    title,
    "mainImage": {
      "alt": mainImage.alt,
      "metadata": mainImage.asset->metadata,
      "url": mainImage.asset->url,
    },
    "slug": slug.current,
  },
  "author": {
      "name": author->name,
      "profilePicture": author->profilePicture.asset->url,
      "slug": author->slug.current,
  },
  "categories": categories[]->{
      "slug": slug.current,
      name,
      title,
  },
  "mainImage" : {
      "alt": mainImage.alt,
      "metadata": mainImage.asset->metadata,
      "url": mainImage.asset->url,
  },
}`;
export const getPostsByCategory = (
  lastYear: number,
  lastSlug: string,
  categorySlug: string
) => {
  const now = new Date().toISOString();
  return getCachedClient()<Post[]>(postsByCategoryQuery, {
    categorySlug,
    lastYear,
    lastSlug,
    now,
  });
};

// Get a single post by its slug
const postQuery = groq`*[_type == "post" && slug.current == $slug && publishedAt <= $now][0] { 
    _id,
    _createdAt,
    body,
    gallery[]{
      "url": asset->url,
      "metadata": asset->metadata,
      alt,
    },
    title,
    publishedAt,
    "previousPost": *[
      _type == "post" &&
      (year > ^.year ||
        (year == ^.year && slug.current < ^.slug.current))
    ] | order(year, slug.current desc) [0] {
      title,
      "mainImage": {
        "alt": mainImage.alt,
        "metadata": mainImage.asset->metadata,
        "url": mainImage.asset->url,
      },
      "slug": slug.current,
    },
    "nextPost": *[
      _type == "post" &&
      (year < ^.year ||
      (year == ^.year && slug.current > ^.slug.current))
    ] | order(year desc, slug.current) [0]{
      title,
      "mainImage": {
        "alt": mainImage.alt,
        "metadata": mainImage.asset->metadata,
        "url": mainImage.asset->url,
      },
      "slug": slug.current,
    },
    year,
    "slug": slug.current,
    "author": {
        "name": author->name,
        "slug": author->slug.current,
    },
    "categories": categories[]->{
        "slug": slug.current,
        name,
        title,
    },
    "mainImage" : {
      "alt": mainImage.alt,
      "metadata": mainImage.asset->metadata,
      "url": mainImage.asset->url,
    },
}`;
export const getPost = (slug: string) => {
  const now = new Date().toISOString();
  return getCachedClient()<Post>(postQuery, { slug, now });
};

const firstPostQuery = groq`*[_type == "post" && publishedAt <= $now] | order(year desc, slug.current)[0]{
  "slug": slug.current,
  "mainImage": {
    "alt": mainImage.alt,
    "metadata": mainImage.asset->metadata,
    "url": mainImage.asset->url,
  },
  title
}`;
export const getFirstPost = () => {
  const now = new Date().toISOString();
  return getCachedClient()<NextPost>(firstPostQuery, { now });
};
const lastPostQuery = groq`*[_type == "post" && publishedAt <= $now] | order(year, slug.current desc)[0]{
  "slug": slug.current,
  "mainImage": {
    "alt": mainImage.alt,
    "metadata": mainImage.asset->metadata,
    "url": mainImage.asset->url,
  },
  title
}`;
export const getLastPost = () => {
  const now = new Date().toISOString();
  return getCachedClient()<NextPost>(lastPostQuery, { now });
};

// ---------------------------------
// Author
// ---------------------------------
// Get all social
const socialsQuery = groq`*[_type == "social"] | order(slug.current) [0...10] {
    _id,
    _createdAt,
    title,
    url,
    "metadata": logo.asset->metadata,
    "slug": slug.current,
    "logo": logo.asset->url,
}`;
export const getSocials = () => getCachedClient()<Social[]>(socialsQuery);

// Get a single social by its slug
const socialQuery = groq`*[type == "social" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    url,
    "metadata": logo.asset->metadata,
    "slug": slug.current,
    "logo": logo.asset->url,
}`;
export const getSocial = (slug: string) =>
  getCachedClient()<Social>(socialQuery, { slug });
