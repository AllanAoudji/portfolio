import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Default NextJs app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <body className={inter.className + ' max-w-7xl mx-auto py-8'}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
