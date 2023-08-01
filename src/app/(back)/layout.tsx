import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';

export { metadata } from 'next-sanity/studio/metadata';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <header className="flex flex-row-reverse px-10 py-4">
        <Link
          href="/"
          className="bg-white border-2 flex items-center pl-4 pr-5 py-1 rounded-xl text-black"
        >
          <ArrowUturnLeftIcon className="h-4 mr-2 w-4" />
          Go to website
        </Link>
      </header>
      <main>{children}</main>
    </body>
  );
};

export default RootLayout;
