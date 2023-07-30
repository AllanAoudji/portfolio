import { ClientConfig } from 'next-sanity';

const apiVersion = process.env.NEXT_PUBLIC_API_VERSION || '2023-05-03';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';

const config: ClientConfig = {
  apiVersion,
  dataset,
  projectId,
};

export default config;
