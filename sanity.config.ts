import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';
import SanityNavBar from '@src/components/SanityNavBar';
import { myTheme } from './theme';

const apiVersion = process.env.NEXT_PUBLIC_API_VERSION || '2023-05-03';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const title = process.env.NEXT_PUBLIC_SANITY_TITLE || 'title';

const config = defineConfig({
  apiVersion,
  basePath: '/admin',
  dataset,
  plugins: [deskTool()],
  projectId,
  schema: { types: schemas },
  studio: {
    components: {
      navbar: SanityNavBar,
    },
  },
  theme: myTheme,
  title,
});

export default config;
