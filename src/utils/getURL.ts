import { siteURL } from '@/lib/environment';

const IS_SERVER = typeof window === 'undefined';

export default function getURL(path: string) {
  const baseURL = IS_SERVER ? siteURL : window.location.origin;
  return new URL(path, baseURL).toString();
}
