import { createClient, type SanityClient } from 'next-sanity';
import {
  sanityAPIVersion as apiVersion,
  sanityDataset as dataset,
  sanityProjectId as projectId,
} from '@/lib/environment';

export function getClient({
  preview,
}: {
  preview?: { token: string };
}): SanityClient {
  const client = createClient({
    apiVersion,
    dataset,
    perspective: 'published',
    projectId,
    useCdn: true,
  });

  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts');
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    });
  }
  return client;
}
