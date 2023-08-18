import Footer from '@src/components/Footer';
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
    <body className={`bg-dark ${rubik.className} relative`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
};

export default RootLayout;
