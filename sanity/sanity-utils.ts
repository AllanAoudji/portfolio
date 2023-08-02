import { groq } from 'next-sanity';
import { getClient } from './config/sanity.clent';

export async function getProjects(): Promise<Project[]> {
  return getClient({}).fetch(
    groq`*[_type == "project"] | order(_createdAt desc){
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}
