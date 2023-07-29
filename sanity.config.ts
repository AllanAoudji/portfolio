import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const projectId = process.env.SANITY_PROJECT_ID ?? '';
const dataset = process.env.SANITY_DATASET ?? 'production';
const title = process.env.SANITY_TITLE ?? 'title';

const config = defineConfig({
  basePath: '/admin',
  dataset,
  plugins: [deskTool()],
  projectId,
  title,
});

export default config;
