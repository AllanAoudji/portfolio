import Footer from '@src/components/Footer';
import Header from '@src/components/Header';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Default frontend NextJs/sanity v3 app',
};

type Props = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: Props) => {
  return (
    <body className={`bg-dark ${inter.className} relative`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
};

export default RootLayout;
