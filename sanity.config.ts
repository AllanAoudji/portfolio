import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';
import SanityNavBar from '@src/components/SanityNavBar';
import { myTheme } from './theme';
import {
  sanityAPIVersion as apiVersion,
  sanityDataset as dataset,
  sanityProjectId as projectId,
} from './lib/environment';

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
