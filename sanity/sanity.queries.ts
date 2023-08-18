import { groq } from 'next-sanity';
import { getCachedClient } from './lib/getClient';

// ---------------------------------
// Author
// ---------------------------------
// Get all authors
export const authorsQuery = groq`*[_type == "author" && slug.current > $lastSlug] | order(slug.current) [0...30] {
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
export const authorQuery = groq`*[_type == "author" && slug.current == $slug][0] {
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
export const categoriesQuery = groq`*[_type == "category" && slug.current > $lastSlug] | order(slug.current) [0...30] {
    _id,
    _createdAt,
    description,
    "slug": slug.current,
    title,
}`;
export const getCategories = (lastSlug: string) =>
  getCachedClient()<Category[]>(categoriesQuery, { lastSlug });

// Get a single category by its slug
export const categoryQuery = groq`*[_type == "category" && slug.current == $slug][0] {
    _id,
    _createdAt,
    description,
    "slug": slug.current,
    title,
}`;

// ---------------------------------
// Page
// ---------------------------------
// Get all pages
export const pagesQuery = groq`*[_type == "page"] | order(order asc, name asc) [0...30] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    body,
}`;
export const getPages = () => getCachedClient()<Page[]>(pagesQuery);

// Get a page by its slug
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0] {
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
export const postsQuery = groq`*[
        _type == "post" &&
        publishedAt <= $now &&
        (publishedAt > $lastPublishedAt || slug.current > $lastSlug)] | order(publishedAt) [0...30] {
    _id,
    _createdAt,
    body,
    title,
    publishedAt,
    "slug": slug.current,
    "author": {
        "name": author->name,
        "profilePicture": author->profilePicture.asset->url,
        "slug": author->slug.current,
    },
    "categories": categories[]->title,
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

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] { 
    _id,
    _createdAt,
    body,
    title,
    publishedAt,
    "slug": slug.current,
    "author": {
        "name": author->name,
        "slug": author->slug.current,
    },
    "categories": {
        "slug": categories[]->slug.current,
        "title": categories[]->title,
    },
    "mainImage" : {
        "alt": mainImage.alt,
        "url": mainImage.asset->url,
    },
}`;
export const getPost = (slug: string) =>
  getCachedClient()<Post>(postQuery, { slug });

// ---------------------------------
// Author
// ---------------------------------
// Get all social
export const socialsQuery = groq`*[_type == "social"] | order(slug.current) [0...10] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "logo": logo.asset->url,
    url,
}`;
export const getSocials = () => getCachedClient()<Social[]>(socialsQuery);

// Get a single social by its slug
export const socialQuery = groq`*[type == "social" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "logo": logo.asset->url,
    url,
}`;
export const getSocial = (slug: string) =>
  getCachedClient()<Social>(socialQuery, { slug });
