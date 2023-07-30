import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={inter.className + ' max-w-7xl mx-auto py-8'}>
      {children}
    </body>
  );
};

export default RootLayout;
