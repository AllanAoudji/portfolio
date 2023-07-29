import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const title = process.env.NEXT_PUBLIC_SANITY_TITLE || 'title';
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION || '2023-05-03';

const config = defineConfig({
  apiVersion,
  basePath: '/admin',
  dataset,
  plugins: [deskTool()],
  projectId,
  schema: { types: schemas },
  title,
});

export default config;
