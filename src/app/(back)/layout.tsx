import Link from 'next/link';

export const metadata = {
  title: 'Default backend NextJs/sanity v3 app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <header>
        <Link href="/">Go back to the front</Link>
      </header>
      <main>{children}</main>
    </body>
  );
};

export default RootLayout;
