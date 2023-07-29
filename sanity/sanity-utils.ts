import { createClient, groq } from 'next-sanity';

const apiVersion = process.env.NEXT_PUBLIC_API_VERSION || '2023-05-03';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';

export async function getProjects() {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
  });

  return client.fetch(
    groq`*[_type == "project"]{
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
