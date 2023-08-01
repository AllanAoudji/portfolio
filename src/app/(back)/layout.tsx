import Link from 'next/link';

export { metadata } from 'next-sanity/studio/metadata';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <header className="px-10 py-4 flex flex-row-reverse">
        <Link
          href="/"
          className="px-5 py-1 border-2 rounded-xl bg-white text-black ease-in-out font-bold"
        >
          Go back to the front
        </Link>
      </header>
      <main>{children}</main>
    </body>
  );
};

export default RootLayout;
