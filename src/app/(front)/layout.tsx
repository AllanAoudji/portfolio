import '../globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

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
      className={`bg-light flex flex-col min-h-screen relative text-xl sm:text-2xl`}
    >
      <main className="grow">{children}</main>
      <Analytics />
    </body>
  );
};

export default RootLayout;
