import './globals.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Default NextJs/sanity v3 app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <html lang="fr">{children}</html>;
};

export default RootLayout;
