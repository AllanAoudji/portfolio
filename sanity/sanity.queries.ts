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
const categoriesQuery = groq`*[_type == "category" && slug.current > $lastSlug] | order(slug.current) [0...30] {
  _id,
  _createdAt,
  description,
  name,
  title,
  "posts": *[
    _type == "post" &&
    ^.slug.current in categories[]->slug.current &&
    publishedAt <= $now &&
    (publishedAt > $lastPostPublishedAt || slug.current > $lastPostSlug)
  ] | order(publishedAt) [0...30]{
    _id,
    _createdAt,
    body,
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
  lastPostPublishedAt: string,
  lastPostSlug: string
) => {
  const now = new Date().toISOString();
  return getCachedClient()<Category[]>(categoriesQuery, {
    lastPostPublishedAt,
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
    (publishedAt > $lasPosttPublishedAt || slug.current > $lastPostSlug)
  ] | order(publishedAt) [0...30]{
    _id,
    _createdAt,
    body,
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
  lasPosttPublishedAt: string,
  lastPostSlug: string
) => {
  const now = new Date().toISOString();
  return getCachedClient()<Category>(categoryQuery, {
    lasPosttPublishedAt,
    lastPostSlug,
    now,
    slug,
  });
};

// ---------------------------------
// Page
// ---------------------------------
// Get all pages
const pagesQuery = groq`*[_type == "page"] | order(order asc, name asc) [0...30] {
  _id,
  _createdAt,
  body,
  name,
  "slug": slug.current,
}`;
export const getPages = () => getCachedClient()<Page[]>(pagesQuery);

// Get a page by its slug
const pageQuery = groq`*[_type == "page" && slug.current == $slug][0] {
  _id,
  _createdAt,
  body,
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
  (publishedAt > $lastPublishedAt ||
  (publishedAt == $lastPublishedAt && slug.current > $lastSlug))
] | order(publishedAt) [0...30] {
  _id,
  _createdAt,
  body,
  publishedAt,
  title,
  year,
  "nextPost": *[
    _type == "post" &&
    (publishedAt > ^.publishedAt ||
    (publishedAt > ^.publishedAt && slug.current > ^.slug.current))
  ] | order(publishedAt) [0]{
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
export const getPosts = (lastPublishedAt: string, lastSlug: string) => {
  const now = new Date().toISOString();
  return getCachedClient()<Post[]>(postsQuery, {
    lastPublishedAt,
    lastSlug,
    now,
  });
};

// Get all posts filtered by category
const postsByCategoryQuery = groq`*[
  _type == "post" &&
  $categorySlug in categories[]->slug.current &&
  publishedAt <= $now &&
  (publishedAt > $lastPublishedAt ||
  (publishedAt == $lastPublishedAt && slug.current > $lastSlug))
] | order(publishedAt) [0...30] {
  _id,
  _createdAt,
  body,
  title,
  year,
  publishedAt,
  "slug": slug.current,
  "nextPost": *[
    _type == "post" &&
    (publishedAt > ^.publishedAt ||
    (publishedAt > ^.publishedAt && slug.current > ^.slug.current))
  ] | order(publishedAt) [0] {
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
  categorySlug: string,
  lastPublishedAt: string,
  lastSlug: string
) => {
  const now = new Date().toISOString();
  return getCachedClient()<Post[]>(postsByCategoryQuery, {
    categorySlug,
    lastPublishedAt,
    lastSlug,
    now,
  });
};

// Get a single post by its slug
const postQuery = groq`*[_type == "post" && slug.current == $slug && publishedAt <= $now][0] { 
    _id,
    _createdAt,
    body,
    title,
    publishedAt,
    "nextPost": *[
      _type == "post" &&
      (publishedAt > ^.publishedAt ||
      (publishedAt == ^.publishedAt && slug.current > ^.slug.current))
    ] | order(publishedAt) [0]{
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

const firstPostQuery = groq`*[_type == "post" && publishedAt <= $now] | order(publishedAt, slug.current)[0]{
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
