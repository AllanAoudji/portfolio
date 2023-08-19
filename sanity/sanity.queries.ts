import { groq } from 'next-sanity';
import { getCachedClient } from './lib/getClient';

// ---------------------------------
// Author
// ---------------------------------
// Get all authors
const authorsQuery = groq`*[_type == "author" && slug.current > $lastSlug] | order(slug.current) [0...30] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "profilePicture": profilePicture.asset->url,
    email,
    bio
}`;
export const getAuthors = (lastSlug: string) =>
  getCachedClient()<Author[]>(authorsQuery, { lastSlug });

// Get a single author by its slug
const authorQuery = groq`*[_type == "author" && slug.current == $slug][0] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "profilePicture": profilePicture.asset->url,
    email,
    bio
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
    title,
    name,
    "slug": slug.current,
    "posts": *[
        _type == "post" &&
        ^.slug.current in categories[]->slug.current &&
        publishedAt <= $now &&
        (publishedAt > $lastPostPublishedAt || slug.current > $lastPostSlug)
    ] | order(publishedAt) [0...30]{
        _id,
        _createdAt,
        body,
        title,
        year,
        publishedAt,
        "slug": slug.current,
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
            "profilePicture": author->image.asset->url,
            "url": mainImage.asset->url,
        },
    },
}`;
export const getCategories = (
  lastSlug: string,
  lastPostPublishedAt: string,
  lastPostSlug: string
) => {
  const now = new Date().toISOString();
  return getCachedClient()<Category[]>(categoriesQuery, {
    lastSlug,
    now,
    lastPostPublishedAt,
    lastPostSlug,
  });
};

// Get a single category by its slug
const categoryQuery = groq`*[_type == "category" && slug.current == $slug][0] {
    _id,
    _createdAt,
    description,
    name,
    title,
    "slug": slug.current,
    "posts": *[
        _type == "post" &&
        ^.slug.current in categories[]->slug.current &&
        publishedAt <= $now &&
        (publishedAt > $lasPosttPublishedAt || slug.current > $lastPostSlug)
    ] | order(publishedAt) [0...30]{
        _id,
        _createdAt,
        body,
        title,
        year,
        publishedAt,
        "slug": slug.current,
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
            "profilePicture": author->image.asset->url,
            "url": mainImage.asset->url,
        },
    },
}`;
export const getCategory = (
  slug: string,
  lasPosttPublishedAt: string,
  lastPostSlug: string
) => {
  const now = new Date().toISOString();
  return getCachedClient()<Category>(categoryQuery, {
    slug,
    now,
    lasPosttPublishedAt,
    lastPostSlug,
  });
};

// ---------------------------------
// Page
// ---------------------------------
// Get all pages
const pagesQuery = groq`*[_type == "page"] | order(order asc, name asc) [0...30] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    body,
}`;
export const getPages = () => getCachedClient()<Page[]>(pagesQuery);

// Get a page by its slug
const pageQuery = groq`*[_type == "page" && slug.current == $slug][0] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    body,
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
        (publishedAt > $lastPublishedAt || slug.current > $lastSlug)] | order(publishedAt) [0...30] {
    _id,
    _createdAt,
    body,
    title,
    year,
    publishedAt,
    "slug": slug.current,
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
        "profilePicture": author->image.asset->url,
        "url": mainImage.asset->url,
    },
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
    (publishedAt > $lastPublishedAt || slug.current > $lastSlug)
] | order(publishedAt) [0...30] {
    _id,
    _createdAt,
    body,
    title,
    year,
    publishedAt,
    "slug": slug.current,
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
        "profilePicture": author->image.asset->url,
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
        "url": mainImage.asset->url,
    },
}`;
export const getPost = (slug: string) => {
  const now = new Date().toISOString();
  return getCachedClient()<Post>(postQuery, { slug, now });
};

// ---------------------------------
// Author
// ---------------------------------
// Get all social
const socialsQuery = groq`*[_type == "social"] | order(slug.current) [0...10] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "logo": logo.asset->url,
    url,
}`;
export const getSocials = () => getCachedClient()<Social[]>(socialsQuery);

// Get a single social by its slug
const socialQuery = groq`*[type == "social" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "logo": logo.asset->url,
    url,
}`;
export const getSocial = (slug: string) =>
  getCachedClient()<Social>(socialQuery, { slug });
