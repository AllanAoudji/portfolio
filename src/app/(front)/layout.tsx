import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import Footer from '@src/components/Footer';
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
      className={`bg-dark bg-gradient-to-b flex flex-col from-dark from-50% min-h-screen relative to-darker ${rubik.className}`}
    >
      <FullScreenImage />
      <Header />
      <main className="grow">{children}</main>
      <Footer />
      <Analytics />
    </body>
  );
};

export default RootLayout;
