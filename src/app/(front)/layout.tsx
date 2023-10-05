import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import FullScreenImage from '@src/components/FullScreenImage';
import Header from '@src/components/Header';
import { rubik } from '@src/utils/fonts';

export const metadata: Metadata = {
  title: 'Allan Aoudji | Web & graphic designer',
  description: 'Home page',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <body
      className={`bg-light flex flex-col min-h-screen relative ${rubik.className}`}
    >
      <FullScreenImage />
      <Header />
      <main className="grow">{children}</main>
      <Analytics />
    </body>
  );
};

export default RootLayout;
