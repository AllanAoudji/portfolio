import { createClient } from 'next-sanity';
import { cache } from 'react';

import {
  sanityAPIVersion as apiVersion,
  sanityDataset as dataset,
  sanityProjectId as projectId,
  sanityUseCdn as useCdn,
} from '@/lib/environment';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const cachedClient = cache(client.fetch.bind(client));
