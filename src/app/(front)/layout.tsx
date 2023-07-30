import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Default frontend NextJs/sanity v3 app',
};

const currentYear = new Date().getFullYear();

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={inter.className + ' max-w-7xl mx-auto py-8'}>
      {children}
      <footer className="font-white pt-36 font-bold text-center">
        © Allan Aoudji, {currentYear != 2023 && '2023 - '} {currentYear}
      </footer>
    </body>
  );
};

export default RootLayout;
