import Footer from '@src/components/Footer';
import FullScreenImage from '@src/components/FullScreenImage';
import Header from '@src/components/Header';
import { Rubik } from 'next/font/google';

export const metadata = {
  title: 'Default frontend NextJs/sanity v3 app',
};

type Props = {
  children: React.ReactNode;
};

const rubik = Rubik({ subsets: ['latin'] });

const RootLayout = ({ children }: Props) => {
  return (
    <body
      className={`flex flex-col min-h-screen overscroll-none relative bg-gradient-to-b from-dark from-50% to-darker ${rubik.className}`}
    >
      <FullScreenImage />
      <Header />
      <main className="grow overflow-hidden">{children}</main>
      <Footer />
    </body>
  );
};

export default RootLayout;
