import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Default NextJs/sanity v3 app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <html lang="fr">{children}</html>;
};

export default RootLayout;
